import React from 'react'

const Contact = () => {
  const contact_details=[
    {   
    address: ' Awoshie water-works, opposite E & J building, George Walker Bush Highway, Accra, Ghana',
    phone: '027 714 1507',
    phone_one: '026 414 1507',
    phone_two: '0302 906 247',
    littleInfo: 'Thank you for your interest in Owners Property Limited. We are here to help you with all your real estate needs, whether you are looking to buy, sell, or rent a property. Please dont hesitate to contact us with any questions or inquiries you may have.',
    email_address: 'info@ownerspropertiesltd.com',
    lil: 'Get in touch with us'
    }
  ]
  return (
    <div>
      <h1>Contact us</h1>
      {contact_details.map((contact)=>{
        return(
          <div>
            <h6>{contact.littleInfo} </h6>
            <h4>{contact.lil} </h4>
            <p>Location: {contact.address} </p>
            <p>Phone number: {contact.phone} </p>
            <p>{contact.phone_one} </p>
            <p>{contact.phone_two} </p>
            <p>Email address: {contact.email_address} </p>
          </div>
        )
      })}
      </div>
  )
}

export default Contact