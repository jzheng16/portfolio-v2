import { useEffect } from 'react';
import '../main.scss';
import './Tutoring.scss';
import BlogInfo from '../BlogInfo';
import China from '../../../images/china.jpg';

const Tutoring = () => {
  useEffect(() => {
    document.title = 'My Unexpected Role as a Mentor and Tutor';
  }, []);

  return (
    <div className="blog_container">
      <header className="blog_header">
        <BlogInfo title="My Unexpected Role as a Mentor and Tutor" description="How being a coding tutor became a huge turning point in my life and career." published_on="31 October 2021" duration="5" />
      </header>
      <main className="tutoring_main_content">

        <section className="post_content">
          <figure>
            <img src={China} alt="Chinese architecture" />
            <figcaption>Hong Kong 2017.</figcaption>
          </figure>
          <section className="content_block">

            <h2>Background</h2>
            <p><span className="emphasis">June 25th, 2018</span> marked 9 months since I&apos;ve been in China working as an analyst for an investment management company. If you had told me that a year after graduating college that I would be working in China in a field only faintly related to my degree, I probably wouldn&apos;t question it to be honest.</p>
            <p>China was a great time. I had improved my Chinese tremendously and made some great friends. However, I just couldn&apos;t see a future there. There were too many barriers both socially and financially that I knew I couldn&apos;t overcome, no matter how hard I tried.</p>
            <p>I knew I had to eventually move back and truly start my career as a software engineer. So that&apos;s what I did.</p>
            <p>Knowing that my time in China was limited, I began relearning all the stuff I had learned in the bootcamp I attended before I left for China. Things like <a href="#hi" target="_blank" rel="noopener noreferrer">React</a>, <a href="#hi" target="_blank" rel="noopener noreferrer">Redux</a>, and <a href="#hi" target="_blank" rel="noopener noreferrer">Node.js</a> were slowly coming back to me. I spent nearly 3 months self-learning before eventually moving back to my home in NYC.</p>

            <h2>Back Home</h2>
            <p>I was finally back home. However, I still didn&apos;t feel like I was ready to start looking for a job.</p>
            <p>Maybe it was imposter syndrome. Maybe it was just a lack of confidence in not knowing exactly how much I needed to know. Whatever it was, it prevented me from job search.</p>
            <p>So I continued studying hoping to eventually overcome this feeling of not being ready.</p>
            <p>After some period of time, I did gain some confidence. Can I say I was job ready? Probably not. But I couldn&apos;t sit around any longer.</p>
            <p>The one problem? I just didn&apos;t have much real-world experience. Who would want to hire someone with no actual coding experience in the web development field? I had tot think of a way to gain that experience.</p>
            <p>Brainstorming ideas, I happened to stumble on a tutoring site called <a href="https://www.wyzant.com" target="_blank" rel="noopener noreferrer">Wyzant</a>. It was a site that allowed anyone to tutor students in a wide array of subjects such as programming as long as you passed a series of exams.</p>
            <p>Why did this site catch my eye? Well I believe it&apos;s because being a mentor has always been a core value in my life. Throughout my entire life, I have been in numerous mentorship positions including volunteering at local elementary schools, providing tutoring to fellow classmates during my lunchtimes in high school, and being a TA in college.</p>
            <p>So I figured why not? I&apos;ll sign-up and see where it takes me.</p>

            <h2>The Start</h2>
            <p>It was definitely a slow beginning. I don&apos;t think I had a single request from anyone for about a week. And then it started.</p>
            <p>My first ever student on that site was a teacher who was teaching themselves web development and happened to stumble upon a fullstack curriculum that closely reflected what I had done back in my bootcamp.</p>
            <p>As soon as I started tutoring again, it felt natural. It took me back to my past experiences and I instantly remembered why I had taken on all those past mentorship roles. I enjoy all of it, especially the cathartic feeling of being able to teach someone something and having all that finally click in their heads. Above all, I gain a sense of purpose when I tutor.</p>
            <blockquote className="one-line-quote">
              <p><span>Only a life lived for others is a life worthwhile.</span><span className="inline-author">-- Albert Einstein</span></p>
            </blockquote>
            <p>This began my tutoring career. After my first student, more and more students came to me looking for help on their projects or assignments. By 3 months in, it had become a full time job where I was working more than 40-50 hours per week.</p>

            <h2>Conclusion</h2>
            <p>A key takeaway from all this is that life can really take you in any direction, and even the smallest action can have a big impact on where your life takes you.</p>
            <p>To this day, I still tutor anywhere from 5-10 hours a week because I genuinely enjoy it.</p>
            <blockquote>
              <p>The very first thing Joey does is to discover the problem. Once that is discovered, he then explains possible solutions and then explains the process. This is great because I learned how to think when programming in either Java or React. I come out of each session with the confidence and encouragement to do more. At the end of the session, Joey takes the time to make sure all my questions are answered. I would highly recommend him if you have any web application questions.</p>
              <p className="author">-- Mike</p>
            </blockquote>
          </section>
        </section>
      </main>

    </div>
  );
};

export default Tutoring;
