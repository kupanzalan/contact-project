'use client'

import React, { Fragment } from 'react'
import Contact from '@components/Contact'
import ContactHeader from '@components/ContactHeader'
import { useEffect, useState } from "react"
import Modal from '@components/Modal'
import Left from '@components/Left'
import Right from '@components/Right'

const ContactList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactId, setContactId] = useState(6);
  const [contacts, setContacts] = useState([{contactId: 1, name: "John Something", phoneNumber: "+40741343045", email: "john.something@mail.com", picture: "nobody.png"}, 
  {contactId: 2, name: "Sarah Wright", phoneNumber: "+40877323445", email: "sarah.wright@mail.com", picture: "sarah.jpeg"}, 
  {contactId: 3, name: "Lucy Jones", phoneNumber: "+40731787645", email: "lucy.jones@mail.com", picture: "lucy.jpeg"}, 
  {contactId: 4, name: "Jake Perez", phoneNumber: "+40764567890", email: "jake.perez@mail.com", picture: "jake.jpeg"}, 
  {contactId: 5, name: "Timothy Lewis", phoneNumber: "+40732345678", email: "timothy.lewis@mail.com", picture: "timothy.jpeg"}]);

  const [openDropdownId, setOpenDropdownId] = useState(null);
  const isNewContact = true;

   // Function to toggle the dropdown for a contact
   const toggleDropdown = (id) => {
    if (openDropdownId === id) {
      setOpenDropdownId(null); // Close the dropdown
    } else {
      setOpenDropdownId(id); // Open the dropdown for the clicked contact
    }
  };

  const closeDropdown = () => {
    setOpenDropdownId(null); // Close the dropdown
  };

  const removeContact = (idToRemove) => {
    const updatedContacts = contacts.filter(contact => contact.contactId !== idToRemove);
    setContacts(updatedContacts);
    console.log('remove contact with id: ', idToRemove);
  }

  console.log(contacts);

  return (
    <Fragment>
      <div className="mainLayout">
        <div className="left-section">
          <Left />
        </div>

        <div className="contact-list">
          <ContactHeader openAddContact={() => setIsOpen(true)}/>

          <ul className="contact-list-items">
            {contacts.map((contact, index) => (
              <li className="contactItem" key={index}>
                <Contact 
                  contact={contact}
                  isDropdownOpen={openDropdownId === contact.contactId}
                  toggleDropdown={() => toggleDropdown(contact.contactId)}
                  closeDropdown={closeDropdown}
                  removeContact={removeContact}
                  contacts={contacts}
                  setContacts={setContacts}
                  incrementContactId={contactId}
                  setIncrementContactId={setContactId}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="right-section">
          <Right />
        </div>
        <Modal 
          open={isOpen} 
          contacts={contacts}
          setContacts={setContacts}
          contactId={contactId}
          setContactId={setContactId}
          newContact={isNewContact}
          onClose={() => setIsOpen(false)}/>
      </div>
    </Fragment>
  )
}

export default ContactList
