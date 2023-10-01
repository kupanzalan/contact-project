import React from 'react'
import { useRef, useState, useEffect } from 'react';

const FormModal = ({ onClose, formData, setFormData, newContact, handleSubmit }) => {

  const fileInputRef = useRef(null);
  const [isPictureUpladed, setIsPictureUpladed] = useState(false);
  // const isPictureUpladed = true;

  // useEffect(() => {
  //   console.log('formdata picture: ', formData);
  //   if (formData.picture !== '') {
      
  //     setIsPictureUpladed(true);
  //   }
  // }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Handle the selected file as needed, for example, you can set it in your formData.
    setFormData({
      ...formData,
      picture: file, // You can store the file in your formData.
    });
    setIsPictureUpladed(true);
    // console.log(formData.picture);
    console.log('File upload...');
  };

  const handleChange = (e) => {
    console.log('Handling change...');
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const triggerFileUpload = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  return (
    <form 
    onSubmit={(e) => { e.preventDefault(); handleSubmit(); onClose(); }}
    className="contactForm">
      <div className="modalAddPicture">
        <div>
          {newContact ? (
            <>
              {formData.picture ? ( // Check if a picture file has been uploaded
                <img className="modalPhoto" src={formData.picture.name} alt="Uploaded" />
                ) : (
                <img className="modalPhoto" src="nobody.png" alt="Nobody" />
              )}
            </>
          ) : (
            <>
              {formData.picture ? ( // Check if a picture file has been uploaded
                <img className="modalPhoto" src={formData.picture} alt="Uploaded" />
                ) : (
                <img className="modalPhoto" src="nobody.png" alt="Nobody" />
              )}
            </>
          )}
          {/* {formData.picture ? ( // Check if a picture file has been uploaded
            <img className="modalPhoto" src={formData.picture.name} alt="Uploaded" />
            ) : (
            <img className="modalPhoto" src="nobody.png" alt="Nobody" />
          )} */}
        </div>
        <div className="addNewButton">
          {(!isPictureUpladed && newContact) ? (
            <>
              <button className="addPictureButton" onClick={triggerFileUpload}>
                <img className="addChangeImage" src="Add.svg" alt="Add"></img>Add picture
              </button>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </>) : (
            <>
              <button className="changePictureButton" onClick={triggerFileUpload}>
                <img className="addChangeImage" src="Change.svg" alt="Change"></img>Change picture
              </button>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <button className="deleteButton">
                <img src="Delete.svg" alt="Delete"></img>
              </button>
            </>)}
          </div>
      </div>
      <div className="formInputDivs">
        <label className="formLabel">Name</label>
        <input 
          className="formInput" 
          type="text" 
          name="name"
          required 
          value={formData.name}
          onChange={handleChange}
          placeholder="Jamie Wright"></input>
      </div>

      <div className="formInputDivs">
        <label className="formLabel">Phone number</label>
        <input 
          className="formInput" 
          type="text" 
          name="phoneNumber"
          required 
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="+01 234 5678"></input>
      </div>

      <div className="formInputDivs">
        <label className="formLabel">Email adress</label>
        <input 
          className="formInput" 
          type="text" 
          name="email"
          required 
          value={formData.email}
          onChange={handleChange}
          placeholder="jamie.wright@mail.com"></input>
      </div>

      <div className="buttonsForm">
        <button className="cancelButton" onClick={onClose}>Cancel</button>
        <button type="submit" className="submitButton">Done</button>
      </div>
    </form>
  )
}

export default FormModal
