function PopupWithForm( { name, title, type, isOpen, onClose, children, onSubmitHandler} ) {

  return (
    <>
      <div className={isOpen
      ? `popup popup_type_${name} popup_visible`
      : `popup popup_type_${name}`}
      >
        <div className={`popup__content popup__content_${type}`}>
          <button 
            className="popup__close-button" 
            type="button"
            onClick={onClose}
          >
          </button>
          <h3 className="popup__title">{title}</h3>
          <form  
            className="popup__form" 
            name={`${name}-form`} 
            noValidate
            onSubmit={onSubmitHandler}
          >
            {children}
            <button 
              type="submit" 
              className="popup__button"
              >Сохранить
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default PopupWithForm;