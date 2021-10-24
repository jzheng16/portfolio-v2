import React, { Component } from 'react';
import './Contact.scss';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.handleForm = this.handleForm.bind(this);
    this.state = { formSubmitted: false };
  }

  handleForm(e) {
    e.preventDefault();
    const template_params = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };
    const template_id = process.env.REACT_APP_TEMPLATE_ID;
    window.emailjs.send('default_service', template_id, template_params, process.env.REACT_APP_EMAILJS_USER_ID)
      .then(() => {
        this.setState({ formSubmitted: true });
      })
      .catch(err => console.error('error submitting form ', err));
  }

  render() {
    const { formSubmitted } = this.state;
    return (
      <section id="contact" className="contact section">

        <h1
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="section-header"
        >
          Contact

        </h1>
        {formSubmitted
          ? (
            <div
              className="submitted"
              data-aos="zoom-in-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              Thank you submitting your form. I will get back to you shortly.
            </div>
          )
          : (
            <form
              ref={this.form}
              onSubmit={this.handleForm}
              className="contact-form"
              data-aos="zoom-in-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <input type="text" id="name" name="name" placeholder="Name" required />
              <input type="email" id="email" name="email" placeholder="Enter email" required />
              <textarea cols="30" rows="10" name="message" placeholder="Your message..." required />
              <button type="submit"> Submit </button>
            </form>
          )}

      </section>
    );
  }
}

export default Contact;
