import { React, useState, useEffect, useRef } from 'react'
import Dropdown from './Dropdown'
import Modal from './Modal'

const Contact = ({ contact, isDropdownOpen, toggleDropdown, closeDropdown, 
  removeContact, contacts, setContacts, incrementContactId, setIncrementContactId }) => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const isNewContact = false;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onItemClick = (item) => {
    // Close the dropdown when an item is clicked
    closeDropdown();
    if (item === 'Remove') {
      removeContact(contact.contactId);
      
    }

    if (item === 'Edit') {
      setIsModalOpen(true);
      console.log('current contacts id in Contact comp: ', contact.contactId);
    }
  };

  // const toggleDropdown = () => {
  //   setIsDropdownOpen((prevIsOpen) => !prevIsOpen);
  // }

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     // Check if the click target is outside of the dropdown and not the "More" button
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(event.target)
  //        && event.target.alt !== 'More'
  //     ) {
  //       setIsDropdownOpen(false);
  //     }
  //   };

  //   // Attach the event listener when the component mounts
  //   window.addEventListener('click', handleClickOutside);

  //   // Remove the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('click', handleClickOutside);
  //   };
  // }, []);

  return (
    <>
      <div className="contact">
        <div>
          <img className="lisItemPhoto" src={contact.picture} alt={contact.name}></img>
        </div>
          <div className="contactDetails">
            <div>
              <div className="contactName">{contact.name}</div>
              <div className="contactPhone">{contact.phoneNumber}</div>
            </div>
          </div>
      </div>
      <div className={`actionButtons ${isDropdownOpen ? 'dropdown-open' : ''}`}>
        <div className="contactActionIcons">
          <img src="Mute.svg" alt="Mute"></img>
        </div>
        <div className="contactActionIcons">
          <img src="Call.svg" alt="Call"></img>
        </div>
        <div className="contactActionIcons">
          <img src="More.svg" alt="More" onClick={toggleDropdown} className={isDropdownOpen ? 'moreIconDropdown' : ''}></img>
          {isDropdownOpen && (
            <div className="dropdownContainer" ref={dropdownRef}>
              <Dropdown onItemClick={onItemClick}/>
            </div>
          )}
        </div>
      </div>
      <Modal 
        open={isModalOpen} 
        contacts={contacts}
        setContacts={setContacts}
        contactId={incrementContactId}
        setContactId={setIncrementContactId}
        newContact={isNewContact}
        currentContactId={contact.contactId}
        onClose={() => setIsModalOpen(false)}/>
    </>
  )
}

export default Contact
