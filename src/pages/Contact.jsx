import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className='contact'>
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p className="subtitle">We'd love to hear from you!</p>
      </div>

      <div className="contact-content">
        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          {submitted && (
            <div className="success-message">
              <img src="/images/rock-and-roll.png" alt="success" className="success-icon" />
              <p>Thanks for reaching out! We'll get back to you soon.</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell us what's on your mind..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <img src="/images/rock-and-roll.png" alt="rock" className="btn-icon" />
              Send Message
              <img src="/images/rock-and-roll.png" alt="rock" className="btn-icon flip" />
            </button>
          </form>
        </div>

        <div className="contact-info-section">
          <h2>Contact Information</h2>
          <div className="info-cards">
            <div className="info-card">
              <img src="/images/message.png" alt="email" className="contact-icon" />
              <h3>Email</h3>
              <p>hello@punkstore.com</p>
            </div>
            <div className="info-card">
              <img src="/images/phone-call.png" alt="phone" className="contact-icon" />
              <h3>Phone</h3>
              <p>(555) 123-4567</p>
            </div>
            <div className="info-card">
              <img src="/images/pin-map.png" alt="location" className="contact-icon" />
              <h3>Location</h3>
              <p>Chicago, IL</p>
            </div>
          </div>

          <div className="business-hours">
            <h3>Business Hours</h3>
            <ul>
              <li><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</li>
              <li><strong>Saturday:</strong> 10:00 AM - 4:00 PM</li>
              <li><strong>Sunday:</strong> Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;