import { useState } from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfileOpen, setEditProfileOpen] = useState(false);
  const [isEAddPlaceOpen, setAddPlaceOpen] = useState(false);
  const [isEditAvatarOpen, setEditAvatarOpen] = useState(false);
  const [isImageOpen, setImageOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  
  function handleEditProfileClick() {
    setEditProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlaceOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImageOpen(true);
  }

  function closeAllPopups() {
    setEditProfileOpen(false);
    setAddPlaceOpen(false);
    setEditAvatarOpen(false);
    setImageOpen(false)
    setTimeout(()=> setSelectedCard({}), 1000)
  }

  function handleFormSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="page">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm 
        title="Редактировать профиль" 
        name="profile"
        isOpen={isEditProfileOpen}
        onClose={closeAllPopups}
        onSubmitHandler={handleFormSubmit}
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
        />
        <span 
          className="popup__error popup__error_bottom" 
          id="job-input-error">
        </span>  
      </PopupWithForm>
      <PopupWithForm 
        title="Новое место" 
        name="place"
        isOpen={isEAddPlaceOpen}
        onClose={closeAllPopups}
        onSubmitHandler={handleFormSubmit}
      >
        <input
          id="title-input"
          type="text"
          name="place-name"
          className="popup__input popup__input_type_title"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span 
          className="popup__error popup__error_top" 
          id="title-input-error">
        </span>
        <input
          id="link-input"
          type="url"
          name="place-link"
          className="popup__input popup__input_type_link"
          placeholder="Ссылка на картинку"
          required
        />
        <span 
          className="popup__error popup__error_bottom" 
          id="link-input-error">
        </span>  
      </PopupWithForm>
      <PopupWithForm 
        title="Обновить аватар" 
        name="avatar"
        type="modified"
        isOpen={isEditAvatarOpen}
        onClose={closeAllPopups}
        onSubmitHandler={handleFormSubmit}
      >
        <input
          id="link-avatar"
          type="url"
          name="link"
          className="popup__input popup__input_type_link"
          placeholder="Ссылка на изображение"
          required
        />
        <span 
          className="popup__error popup__error_top" 
          id="link-avatar-error">
        </span>
      </PopupWithForm>
      <ImagePopup 
        isOpen={isImageOpen}
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
