import { useRef, useEffect } from 'react';

import PopupWithForm from './PopupWithForm';

function EditAvatarPopup( {isOpen, onClose, onUpdateAvatar} ) {
  const avatarRef = useRef();
 
  function handleSubmit(event) {
    event.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  useEffect(() => {
    if(isOpen) {
        avatarRef.current.value = ''
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар" 
      type="modified"
      button="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="link-avatar"
        type="url"
        name="link"
        className="popup__input popup__input_type_link"
        placeholder="Ссылка на изображение"
        required
        ref={avatarRef}
      />
      <span 
        className="popup__error popup__error_top" 
        id="link-avatar-error">
       </span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;