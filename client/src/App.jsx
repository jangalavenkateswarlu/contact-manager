import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import API from './api';
import "./App.css";
import ContactList from './ContactList';
const App = () => {
  const [contact ,setContact] = useState([]);
  const[editContact, setEditContact] = useState(null);
  console.log(editContact);
  //load all contacts
  const fetch = async () =>{
    const res = await API.get("/");
    setContact(res.data);
  };
  useEffect(()=>{
    fetch();
  },[]);
  //add new contact
  const addContact = async (data) =>{
    await API.post("/",data);
    fetch(); 
  };
  // delete contact
   const deleteContact = async (id) =>{
    await API.delete(`/${id}`);
    fetch(); 
  };

  //update contact 
  const updateContact = async (data)=>{
    await API.put(`${editContact._id}`,data);
    setEditContact(null);
    fetch();
  };
  return (
    <div>
      <ContactForm onSubmit= {editContact ? updateContact : addContact}
       existing ={editContact}/>
      <ContactList  contact ={contact} 
      onDelete={deleteContact}
      onEdit={setEditContact}
       />
    </div>
  );
};

export default App;