import React, { Component } from 'react';
import './Navbar.scss';
import Menu from 'react-burger-menu/lib/menus/slide';
import resume from '../../images/Zheng_Joey_Resume.pdf';

export default class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, menuOpen: false };
    this.updateWidth = this.updateWidth.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
  }

  updateWidth() {
    this.setState({ width: window.innerWidth });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    const { width, menuOpen } = this.state;
    return (
      <div className="container-nav">
        {width < 630
          ? (
            <nav id="nav" className="mobile_nav">
              <Menu
                isOpen={menuOpen}
              >
                <a onClick={this.closeMenu} href="#top"><i className="fas fa-home"></i>Home</a>
                {/* <a onClick={this.closeMenu} href="/blog">Blog</a> */}
                <a onClick={this.closeMenu} href="#blog">Blogs</a>
                <a onClick={this.closeMenu} href="#projects">Projects</a>
                <a onClick={this.closeMenu} href="#contact"><i className="fas fa-envelope"></i>Contact</a>
                <a onClick={this.closeMenu} href={resume} target="_blank" rel="noopener noreferrer"><i className="far fa-file"></i>Resume</a>
              </Menu>
            </nav>
          )
          : (
            <nav id="nav">
              <ul className="nav-list sticky">

                <li className="nav-item">
                  <a href="#top">Home</a>
                </li>
                {/* <li className="nav-item"><a href="/blog">Blog</a></li> */}
                <li className="nav-item"><a href="#blog">Blogs</a></li>
                <li className="nav-item"><a href="#projects">Projects</a></li>
                <li className="nav-item"><a href="#contact">Contact</a></li>
                <li className="nav-item"><a href={resume} target="_blank" rel="noopener noreferrer">Resume</a></li>
              </ul>
            </nav>
          )}
      </div>

    );
  }
}
