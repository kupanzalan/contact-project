import React from 'react'

const Dropdown = ({ onItemClick }) => {

  const handleItemClick = (item) => {
    // Call the onItemClick callback with the clicked item
    onItemClick(item);
  };

  return (
    <>
      <ul>
        <li className="dropdownListItem" onClick={() => handleItemClick('Edit')}>
          <img className="dropdownIcons" src="SettingsDropdown.svg" alt="Settings"></img>Edit
        </li>
        <li className="dropdownListItem" onClick={() => handleItemClick('Favourite')}>
          <img className="dropdownIcons" src="Favourite.svg" alt="Favourite"></img>Favourite
        </li>
        <li className="dropdownListItem" onClick={() => handleItemClick('Remove')}>
          <img className="dropdownIcons" src="DeleteDropdown.svg" alt="Delete"></img>Remove
        </li>
      </ul>
    </>
  )
}

export default Dropdown
