import React from 'react';
import './Contact.css';

const Contact = () => {
  const contact_details = [
    {
      address: 'Awoshie water-works, opposite E & J building, George Walker Bush Highway, Accra, Ghana',
      phone: '027 714 1507',
      phone_one: '026 414 1507',
      phone_two: '0302 906 247',
      littleInfo: 'Thank you for your interest in Owners Property Limited. We are here to help you with all your real estate needs, whether you are looking to buy, sell, or rent a property. Please don\'t hesitate to contact us with any questions or inquiries you may have.',
      email_address: 'info@ownerspropertiesltd.com',
      lil: 'Get in touch with us'
    }
  ];

  return (
    <div className='contact-container'>
      <div className='contact-bg'></div> {/* Add a div for the background image */}
      <div className='contact-details'>
        <h1>Contact us</h1>
        {contact_details.map((contact) => (
          <div key={contact.email_address}>
            <h6>{contact.littleInfo}</h6>
            <h4>{contact.lil}</h4>
            <p>Location: {contact.address}</p>
            <p>Phone number: {contact.phone}</p>
            <p>{contact.phone_one}</p>
            <p>{contact.phone_two}</p>
            <p>Email address: {contact.email_address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;