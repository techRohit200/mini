import React from 'react';
import './Contact.css';

const Contact = () => {
  const form = (
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" />
      </div>
      <div className="form-group">
        <label htmlFor="number">Phone Number:</label>
        <input type="text" id="number" name="number" placeholder="Enter your phone number" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <input type="text" id="gender" name="gender" placeholder="Enter your gender" />
      </div>
      <div className="form-group">
        <label htmlFor="location">location:</label>
        <input type="text" id="location" name="location" placeholder="Enter your location" />
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  )

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      {form}
    </div>
  )
}

export default Contact;
