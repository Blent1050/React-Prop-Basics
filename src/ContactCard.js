import React from "react";

function ContactCard(props) {
  return (
    <div className="contact-card">
      <h2>{props.contact.name}</h2>
      <p>Phone: {props.contact.phone}</p>
      <p>Email: {props.contact.email}</p>
    </div>
  );
}

export default ContactCard;
