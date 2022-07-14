import { useRef, useEffect } from 'react';

import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup( {isOpen, onClose, onAddPlace} ) {
  const nameRef = useRef('');
  const linkRef = useRef('');

  function handleSubmit(event) {
    event.preventDefault();
    
    onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value,
    });
  }

  useEffect(() => {
    if(isOpen) {
        nameRef.current.value = ''
        linkRef.current.value = ''
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      name="place"
      title="Новое место" 
      button="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
        ref={nameRef}
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
          ref={linkRef}
        />
        <span 
          className="popup__error popup__error_bottom" 
          id="link-input-error">
        </span>  
    </PopupWithForm>
  )
}

export default AddPlacePopup;