function ImagePopup(card) {
console.log(card)

  return (
      <>
      <div 
         className={`popup popup_open_image
         ${card 
         ? ' ' 
         : ' ' }
         `}>
        <div className="popup__cover">
          <button 
          className="popup__close-button" 
          type="button"
          // onClick={closePopup}
          >
          </button>
          <figure className="popup__image-container">
            <img 
              className="popup__image"  
              alt={card.name}
              src={card.link}
             />
            <figcaption className="popup__caption">{card.card.name}</figcaption>
          </figure>
        </div>
      </div>
    </>
    )
  }
  
  export default ImagePopup;