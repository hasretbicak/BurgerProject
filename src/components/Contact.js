import React from 'react'
import BannerImage from '../assets/banner.png'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form>
          <label>Name LastName</label>
          <input
            type="text"
            name="name"
            placeholder="Name and Surname..."
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email..."
          />
          <label>Message</label>
          <textarea
            rows="6"
            name="message"
            placeholder="Your Message ..."
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
