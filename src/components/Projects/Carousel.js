import React, { Component } from 'react';
import './Carousel.scss';
import pic1 from '../../images/bg2.jpg';
import pic2 from '../../images/Reacto.png';
import pic3 from '../../images/MFP1.png';
import pic4 from '../../images/html5.png';
import pic5 from '../../images/sass.png';
import pic6 from '../../images/gg-1.jpg';
import pic7 from '../../images/gg-2.jpg';
import pic8 from '../../images/gg-3.jpg';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 };
    this.goToSlide = this.goToSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  goToSlide(index) {
    this.setState({ currentIndex: index });
  }

  nextSlide() {
    let { currentIndex } = this.state;
    if (currentIndex === 2) {
      currentIndex = -1;
    }
    currentIndex += 1;
    this.setState({ currentIndex });
  }

  previousSlide() {
    const slideLength = 3;
    let { currentIndex } = this.state;
    if (currentIndex === 0) {
      currentIndex = slideLength;
    }
    currentIndex -= 1;
    this.setState({ currentIndex });
  }

  render() {
    const gallery = {
      MyFitnessClone: [pic1, pic2, pic3],
      QuizNOS: [pic1, pic2, pic5],
      'REACTO Platform': [pic1, pic2, pic4],
      'G&G Distributors': [pic6, pic7, pic8]
    };
    const {
      project: {
        title, tag, details, github, link
      }
    } = this.props;
    const { currentIndex } = this.state;
    return (
      <div className="carousel">
        <button
          type="button"
          className="carousel-arrow carousel-arrow-left"
          onClick={this.previousSlide}
        >
          <span className="fa fa-angle-left" />
        </button>

        <ul className="carousel-slides">
          <li
            className={currentIndex === 0 ? 'carousel-slide carousel-slide-active' : 'carousel-slide'}
          >
            <img className="project-image" src={gallery[title][0]} alt="Project Slide 1" />
          </li>
          <li className={currentIndex === 1 ? 'carousel-slide carousel-slide-active' : 'carousel-slide'}>
            <img className="project-image" src={gallery[title][1]} alt="Project Slide 2" />
          </li>
          <li className={currentIndex === 2 ? 'carousel-slide carousel-slide-active' : 'carousel-slide'}>
            <img className="project-image" src={gallery[title][2]} alt="Project Slide 3" />
          </li>
        </ul>
        <div className="about-project">
          <div className="project-title">{title}</div>
          <div className="tag">{tag}</div>
          <div className="details">{details}</div>
          {github
            && (
              <div className="github-link">
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <i className="git-icon fab fa-github"></i>
              &nbsp;View Github
                </a>
              </div>
            )}
          {
            link && (
              <div className="github-link">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <i className="git-icon fas fa-shopping-cart"></i>
              &nbsp;Shop Now
                </a>
              </div>
            )
          }
        </div>

        <ul className="carousel-indicators">
          <li>
            <button
              type="button"
              className={currentIndex === 0 ? 'carousel-indicator carousel-indicator-active' : 'carousel-indicator'}
              onClick={() => this.goToSlide(0)}
            >
              {currentIndex === 0
                ? <i className="fas fa-circle"></i>
                : <i className="far fa-circle"></i>}
            </button>
          </li>
          <li>
            <button
              type="button"
              className={currentIndex === 1 ? 'carousel-indicator carousel-indicator-active' : 'carousel-indicator'}
              onClick={() => this.goToSlide(1)}
            >
              {currentIndex === 1
                ? <i className="fas fa-circle"></i>
                : <i className="far fa-circle"></i>}
            </button>
          </li>
          <li>
            <button
              type="button"
              className={currentIndex === 2 ? 'carousel-indicator carousel-indicator-active' : 'carousel-indicator'}
              onClick={() => this.goToSlide(2)}
            >
              {currentIndex === 2
                ? <i className="fas fa-circle"></i>
                : <i className="far fa-circle"></i>}
            </button>
          </li>

        </ul>

        <button
          type="button"
          className="carousel-arrow carousel-arrow-right"
          onClick={this.nextSlide}
        >
          <span className="fa fa-angle-right" />
        </button>
      </div>
    );
  }
}

export default Carousel;
