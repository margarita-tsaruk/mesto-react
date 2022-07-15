import { useEffect } from 'react';
import { useForm } from '../hooks/useForm.js';

import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup( props ) {
  const { values, handleChange, setValues } = useForm({});

  function handleSubmit(event) {
    event.preventDefault();
    
    props.onAddPlace({
      name: values.name,
      link: values.link
    });
  }

  useEffect(() => {
    if(props.isOpen) {
      setValues({});
    }
  }, [props.isOpen, setValues]);

  return (
    <PopupWithForm
      name="place"
      title="Новое место" 
      button="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="title-input"
        type="text"
        name="name"
        className="popup__input popup__input_type_title"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        value={values.name || ''}
        onChange={handleChange}
      />
        <span 
          className="popup__error popup__error_top" 
          id="title-input-error">
        </span>
        <input
          id="link-input"
          type="url"
          name="link"
          className="popup__input popup__input_type_link"
          placeholder="Ссылка на картинку"
          required
          value={values.link || ''}
          onChange={handleChange}
        />
        <span 
          className="popup__error popup__error_bottom" 
          id="link-input-error">
        </span>  
    </PopupWithForm>
  )
}

export default AddPlacePopup;