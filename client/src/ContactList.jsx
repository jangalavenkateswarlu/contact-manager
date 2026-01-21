import React from 'react';
const ContactList = ({contact, onDelete, onEdit }) => {
  return (
    <div className="list">
      <h2>All contacts</h2>
      <ul>
        {contact.map((c)=>(
            <li key={c._id}>
              <strong>{c.name}</strong> -{c.phone} - {c.email}
              <button onClick={()=> onEdit(c)}>Edit</button>
              <button onClick={()=> onDelete(c._id)}>Delete</button>
              </li>
          ))}
      </ul>
    </div>
  );
};

export default ContactList;