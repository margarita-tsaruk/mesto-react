function ImagePopup(props) {

  return (
    <>
      <div 
        className={`popup popup_open_image ${props.isOpen && 'popup_visible'}`}>
        <div className="popup__cover">
          <button 
            className="popup__close-button" 
            type="button"
            onClick={props.onClose}
          >
          </button>
          <figure className="popup__image-container">
            <img 
              className="popup__image"  
              alt={props.card ? props.card.name : ''}
              src={props.card ? props.card.link : ''}
            />
            <figcaption className="popup__caption">{props.card ? props.card.name : ''}</figcaption>
          </figure>
        </div>
      </div>
    </>
  )
}
  
  export default ImagePopup;