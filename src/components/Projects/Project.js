import React, { useState } from 'react';
import Modal from 'react-modal';

import './Project.scss';
import pic1 from '../../images/bg2.jpg';
import pic2 from '../../images/Reacto.png';
import pic3 from '../../images/MFP1.png';
import gg1 from '../../images/gg-1.jpg';
import gg2 from '../../images/gg-2.jpg';
import gg3 from '../../images/gg-3.jpg';
import typist from '../../images/typist.JPG';
import Carousel from './Carousel';

Modal.setAppElement('#root');

const ProjectInfo = [
  {
    title: 'QuizNOS',
    tag: 'Quiz App',
    details: 'A quiz app that allows users to test their knowledge in web design with quizzes on HTML, CSS, JavaScript, and more!',
    github: 'https://github.com/jzheng16/quiz',
  },
  {
    title: 'TypeRacer',
    tag: 'Test your typing skills',
    details: 'Race against the clock while you improve your typing skills.',
    github: 'https://github.com/jzheng16/typist',
    link: 'https://typist-eta.vercel.app/',
    linkText: 'Play'
  },
  {
    title: 'MyFitnessClone',
    tag: 'Diet Tracking App',
    details: 'A new take on the famous MyFitnessPal tracking app that lets users to keep track of their diets and achieve their fitness goals.',
    github: 'https://github.com/jzheng16/MFP-clone',
  },
  {
    title: 'G&G Distributors',
    tag: 'E-Commerce Site',
    details: 'G&G Distributors offers a variety of products to shop for including silk flowers, glass vases, candles, and more for your special occasions.',
    link: 'https://gandgwebstore.com',
    linkText: 'Shop Now'
  },
];

const gg = ProjectInfo[3];

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);

  const displayModal = index => {
    setShowModal(true);
    setCurrentProject(index);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const renderModal = () => {
    if (!showModal) {
      return null;
    }

    return (
      <div>
        <div
          className="carousel-container"
        >
          <Carousel project={ProjectInfo[currentProject]} closeModal={closeModal} />
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="projects section">
      <div className="main-content">
        <h1
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="section-header"
        >
          Projects
        </h1>
        <div className="gallery">
          {/* <div
            className="card"
            data-aos="slide-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <div className="title">
              No Project Yet
              <span>Built with React/Redux</span>
            </div>
            <button className="learn_more" type="button" onClick={() => displayModal(0)}>Learn More</button>

            <img className="project_picture" id="project1" src={pic1} alt="Project 1" />
          </div> */}

          <div
            className="card"
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            <div className="title">
              {gg.title}
              <span>Built with PHP/CS-Cart</span>
            </div>
            <button className="learn_more" type="button" onClick={() => displayModal(3)}>Learn More</button>
            <img className="project_picture" id="project4" src={gg1} alt="Project 4" />
          </div>
          <div
            className="card"
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="200"
          >
            <div className="title">
              TypeRacer
              <span>Built with React</span>
            </div>
            <button className="learn_more" type="button" onClick={() => displayModal(1)}>Learn More</button>

            <img className="project_picture" id="project2" src={typist} alt="Project 2" />
          </div>
          <div
            className="card"
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="300"
          >
            <div className="title">
              MyFitnessPal Clone
              <span>Built with React/Redux</span>
            </div>
            <button className="learn_more" type="button" onClick={() => displayModal(2)}>Learn More</button>
            <img className="project_picture" id="project3" src={pic3} alt="Project 3" />
          </div>

        </div>
        <Modal
          isOpen={showModal}
          contentLabel="Project Details"
          shouldCloseOnEsc
          closeTimeoutMS={150}
          className="project-modal"
          overlayClassName="project-overlay"
          shouldReturnFocusAfterClose={false}
          onRequestClose={closeModal}
        >
          {renderModal()}
        </Modal>
      </div>
    </section>
  );
};

export default Projects;
