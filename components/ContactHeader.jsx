import React from 'react'

const ContactHeader = ({ openAddContact }) => {
  return (
    <div className="contactsHeader">
      <div>
        <h1>Contacts</h1>
      </div>

      <div className="rightPart">
        <div className="settingsIcon">
          <img src="Settings.svg" alt="Settings"></img>
        </div>
        <div className="photoIcon">
          <img src="Photo.svg" alt="Photo"></img>
        </div>
        <div className="addNewButton">
          <button className="contactButton" onClick={openAddContact}>
            <img src="Add.svg" alt="Add"></img><div className="addNewButtonText">Add new</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactHeader
