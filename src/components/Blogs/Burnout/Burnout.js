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
            <p>Of course, there were cons as well.</p>
            <p>With all the time I saved not having to commute, I found it difficult allocating that time to the various parts of my life.</p>
            <p>I didn&apos;t want to go out in fear of catching covid, so the majority of my time spent in 2021 was indoors. Besides work, the only other activity I dedicated a significant chunk of my time to was working out.</p>
            <p>Equipped with only a set of adjustable dumbbells and a bench, I adjusted the routine I normally did at the gym and continued making progress.</p>
            <p>It felt great knowing that covid didn&apos;t entirely prevent me from working out because I attribute a significant portion of phyiscal health and quite frankly my sanity to working out.</p>
            <p>But besides working out, I didn&apos;t do much else in my spare time. Instead, I made the mistake (in hindsight) of opening up my work laptop and continuing on whatever task I had left off at. Slowly, this became my routine and before I knew it, the line between my personal time and work time was starting to blur.
            </p>

            <h2>Breaking the Routine</h2>
            <p>When I was working at the office, the line between my personal time and work time was always pretty clear. My work time starts as soon as I get into the office and ends once I leave. But with the pandemic and WFH, it had become a habit of mine to open up my work laptop whenever I couldn&apos;t find something else to do.</p>
            <p>I worked constantly. After dinner? Work. Nights when I couldn&apos;t sleep? Work. My daily routine was almost all work without me even realizing it. It wasn&apos;t clear to me at the time that I was slowly <span className="emphasis">burning out.</span></p>
            <blockquote>
              <p>In order to break the cycle of burnout, it is important to observe and identify your burn events, prepare for those you can identify, and recover from each.</p>
              <p className="author">-- Dr. Kate Steiner</p>
            </blockquote>
            <p>When 2022 rolled around and I had my annual review, the lead for my team had told me that I had contributed the most out of everyone. I was ectastic to say the least and my salary and bonus definitely reflected my efforts. But that was also when it truly hit me that I had spent way too much time focused on work. It was clear that I had to reestablish that boundary.</p>
            <p>I made sure that once the work day ends, I would shut down my work laptop and force myself not to turn it on again until the next day. Luckily, things were slowly returning back to normal in 2022. Restaurants were starting to open up again, friends were more willing to reconnect in-person and slowly I felt my personal time coming back to me.</p>
            {/* <blockquote className="one-line-quote">
              <p><span>Only a life lived for others is a life worthwhile.</span><span className="inline-author">-- Albert Einstein</span></p>
            </blockquote> */}
            {/* <p>This began my tutoring career. After my first student, more and more students came to me looking for help on their projects or assignments. By 3 months in, it had become a full time job where I was working more than 40-50 hours per week.</p> */}

            <h2>Conclusion</h2>
            <p>Looking back, it wasn&apos;t the worst thing in the world having my work time slowly take over my personal time. I had gotten a lot of work done and as a result, also picked up a lot of new tools and concepts that will hopefully make me a better software engineer.</p>
            <p>But like all things, it&apos;s important to balance your time and make sure that your physical and mental health are at the top of your priorities. </p>

            <p>Burnout is all too common in my field of work and I hope that anyone who does experience it can find their own way of dealing with it.</p>

          </section>
        </section>
      </main>

    </div>
  );
};

export default Burnout;
