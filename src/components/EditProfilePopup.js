import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

import PopupWithForm from './PopupWithForm.js';

function EditProfilePopup( {isOpen, onClose, onUpdateUser} ) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);

  function handleNameInputChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionInputChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  useEffect(() => {
    if(isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль" 
      button="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="name-input"
        type="text"
        name="user-name"
        className="popup__input popup__input_type_name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
        value={name}
        onChange={handleNameInputChange}
      />
      <span 
        className="popup__error popup__error_top" 
        id="name-input-error">
      </span>
      <input
        id="job-input"
        type="text"
        name="user-job"
        className="popup__input popup__input_type_job"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        required
        value={description}
        onChange={handleDescriptionInputChange}
      />
      <span 
        className="popup__error popup__error_bottom" 
        id="job-input-error">
      </span> 
    </PopupWithForm>
  )
}

export default EditProfilePopup;
