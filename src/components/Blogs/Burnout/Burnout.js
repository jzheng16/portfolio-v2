import { useEffect } from 'react';
import '../main.scss';
import BlogInfo from '../BlogInfo';
import Hiking from '../../../images/hiking.jpg';

const Burnout = () => {
  useEffect(() => {
    document.title = 'Work and Burnout';
  }, []);

  return (
    <div className="blog_container">
      <header className="blog_header">
        <BlogInfo title="Work and Burnout" description="Balancing work, fitness, and mental health amidst the pandemic." published_on="11 November 2021" duration="10" />
      </header>
      <main className="tutoring_main_content">

        <section className="post_content">
          <figure>
            <img className="hudson_river_image" src={Hiking} alt="View of Hudson River" />
            <figcaption>Bear Mountain Park 2021</figcaption>
          </figure>
          <section className="content_block">

            <h2>Background</h2>
            <p>The <span className="emphasis">pandemic</span> has had a tremendous effect on everyone in this world. Everyone has been affected by it in one way or another.</p>
            <p>My experience to summarize has been one with a lot of mixed feelings.</p>

            <h2>Beginning</h2>
            <p>In <span className="emphasis">March of 2020</span>, I was told by my company that we would be issued laptops and begin working from home until further notice. It felt surreal. I didn&apos;t expect to be working from home so suddenly.</p>
            <p>Perhaps the biggest effect this pandemic has had on me was the work from home <span className="emphasis">(WFH)</span> situation.</p>
            <p>It was amazing. My commute to the office ranged anywhere from 2-3 hours roundtrip. It wasn&apos;t pleasant to say the least. The amount of time saved from commuting has paid for itself 10x over. I got more sleep and I was able to get more out of the day.</p>
            <p>Of course, there are cons as well.</p>
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

export default Burnout;
