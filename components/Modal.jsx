'use client'

import React from 'react'
import ReactDOM from 'react-dom';
import FormModal from './FormModal';
import { useEffect, useState } from "react"

const Modal = ({ open, contacts, setContacts, contactId, setContactId, newContact, currentContactId, onClose }) => {

  if (!open) return null;
  
  const [formData, setFormData] = useState({
    contactId: '', 
    name: '', 
    phoneNumber: '', 
    email: '', 
    picture: ''
  });

  useEffect(() => {
    console.log('is new contact: ', newContact);
    console.log('current contactId: ', currentContactId);
    if (open) {
      if (newContact) {
        setFormData({
          contactId: '',
          name: '',
          phoneNumber: '',
          email: '',
          picture: ''
        });
      } else {
        const currentContact = contacts.find(contact => contact.contactId === currentContactId);
        console.log('current contact: ', currentContact);
        setFormData({
          contactId: currentContact.contactId,
          name: currentContact.name,
          phoneNumber: currentContact.phoneNumber,
          email: currentContact.email,
          picture: currentContact.picture
        });
      }
    }
  }, [open]);

  const addContact = () => {
    setContactId(prevContactId => prevContactId + 1);
    setContacts([
      ...contacts, 
      { contactId: contactId, name: formData.name, phoneNumber: formData.phoneNumber, email: formData.email, picture: formData.picture ? formData.picture.name : "nobody.png" }
    ]);
    console.log('In handling submission: ', formData.contactId, formData.name, formData.phoneNumber, formData.email, formData.picture.name);
  }

  return ReactDOM.createPortal(
    <>
      <div className="modalOverlay"/>
      <div className="modalComponent">
        <div>
          <h1>Add contact</h1>
        </div>
        
        <div>
          <FormModal 
            type="Create"
            onClose={onClose} 
            formData={formData}
            setFormData={setFormData}
            newContact={newContact}
            handleSubmit={addContact} />
        </div>
      </div>
    </>, 
    document.getElementById('modal-root')
  )
}

export default Modal
