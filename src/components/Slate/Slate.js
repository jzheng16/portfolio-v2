// import React, { useState, useCallback } from 'react';
// // Import the Slate editor factory.
// import { createEditor, Editor, Transforms, Text } from 'slate';

// // Import the Slate components and React plugin.
// import { Slate, Editable, withReact, useSlate } from 'slate-react';

// // Define our own custom set of helpers.
// const CustomEditor = {
//   isBoldMarkActive(editor) {
//     const [match] = Editor.nodes(editor, {
//       match: n => n.bold === true,
//       universal: true,
//     });

//     return !!match;
//   },

//   isCodeBlockActive(editor) {
//     const [match] = Editor.nodes(editor, {
//       match: n => n.type === 'code',
//     });

//     return !!match;
//   },

//   toggleBoldMark(editor) {
//     const isActive = CustomEditor.isBoldMarkActive(editor);
//     Transforms.setNodes(
//       editor,
//       { bold: isActive ? null : true },
//       { match: n => n, split: true } // TODO: FIx
//     );
//   },

//   toggleCodeBlock(editor) {
//     const isActive = CustomEditor.isCodeBlockActive(editor);
//     Transforms.setNodes(
//       editor,
//       { type: isActive ? null : 'code' },
//       { match: n => Editor.isBlock(editor, n) }
//     );
//   },
// };

// const initialValue = [
//   {
//     type: 'paragraph',
//     children: [{ text: 'A line of text in a paragraph.' }],
//   },
// ];

// const App = () => {
//   const [editor] = useState(() => withReact(createEditor()));
//   const { isInline } = editor;
//   // Tells editor that any child with type link is inline element
//   editor.isInline = element => (element.type === 'link' ? true : isInline(element));

//   const renderElement = useCallback(props => {
//     switch (props.element.type) {
//       case 'code':
//         return <CodeElement {...props} />;
//       default:
//         return <DefaultElement {...props} />;
//     }
//   }, []);

//   const renderLeaf = useCallback(props => <Leaf {...props} />, []);

//   return (
//     <Slate editor={editor} value={initialValue}>
//       <Toolbar />
//       <Editable
//         renderElement={renderElement}
//         renderLeaf={renderLeaf}
//         onKeyDown={event => {
//           if (!event.ctrlKey) {
//             return;
//           }

//           // Replace the `onKeyDown` logic with our new commands.
//           switch (event.key) {
//             case '`': {
//               event.preventDefault();
//               CustomEditor.toggleCodeBlock(editor);
//               break;
//             }

//             case 'b': {
//               event.preventDefault();
//               CustomEditor.toggleBoldMark(editor);
//               break;
//             }
//             default:
//               break;
//           }
//         }}
//       />
//     </Slate>
//   );
// };

// // Define a React component renderer for our code blocks.
// const CodeElement = props => (
//   <pre {...props.attributes}>
//     <code>{props.children}</code>
//   </pre>
// );

// const DefaultElement = props => <p {...props.attributes}>{props.children}</p>;

// // Define a React component to render leaves with bold text.
// const Leaf = props => (
//   <span
//     {...props.attributes}
//     style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
//   >
//     {props.children}
//   </span>
// );

// const Toolbar = () => {
//   const editor = useSlate();
//   return (
//     <div>
//       <Button active={isBoldActive(editor)}>B</Button>
//       <Button active={isItalicActive(editor)}>I</Button>
//     </div>
//   );
// };
// export default App;
