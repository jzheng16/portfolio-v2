import React, { useState, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import './TipTap.scss';
import { Editor } from '@tiptap/core';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Typography from '@tiptap/extension-typography';
import Highlight from '@tiptap/extension-highlight';
import Image from '@tiptap/extension-image';
import History from '@tiptap/extension-history';
import axios from 'axios';
import Toolbar from './Toolbar';

let timer = null;

new Editor({
  element: document.querySelector('.element'),
  extensions: [
    Document,
    Paragraph,
    Text,
  ],
  content: '<p>Example Text</p>',
  autofocus: true,
  editable: true,
  // injectCSS: false,
});

const Tiptap = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [body, setBody] = useState('');
  const editor = useEditor({
    extensions: [
      StarterKit,
      Typography,
      Highlight,
      Image,
    ],
    autofocus: true,
    editable: true,

  });

  useEffect(() => {
    console.log('editor', editor);
    // Check to see if anything stored in local storage
    const post = localStorage.getItem('post');
    if (post && editor) {
      const { title, description, duration, body } = JSON.parse(post);
      console.log('parsing..', JSON.parse(post));
      setTitle(title);
      setDescription(description);
      setDuration(duration);
      setBody(body);
      editor.commands.setContent(body);
    }
  }, [editor]);

  useEffect(() => {
    if (editor) {
      editor.on('update', ({ editor }) => {
        const body = editor.getHTML();
        setBody(body);
        clearTimeout(timer);
        timer = setTimeout(() => {
          localStorage.setItem('post', JSON.stringify({ body, title, duration, description }));
        }, 1000);
      });
    }
    return () => {
      if (editor) {
        editor.off('update');
      }
    };
  }, [editor, title, description, duration, body]);

  const savePost = () => {
    const body = editor.getHTML();
    if (title && description && duration && body) {
      console.log('here1');
      axios.post('http://localhost:3001/posts', { body, title, duration, description })
        .then(x => {
          localStorage.removeItem('post');
        })
        .catch(err => console.log(err));
    }
  };
  return (
    <div>
      <Toolbar editor={editor} />
      <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)} />
      <input type="number" name="duration" value={duration} onChange={e => setDuration(+e.target.value)} />
      <EditorContent editor={editor} />
      <button onClick={savePost}>Save</button>

      <div>{body}</div>

    </div>
  );
};

export default Tiptap;
