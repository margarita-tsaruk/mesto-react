function Card( {card, onCardClick} ) {
    function handleClick() {
        onCardClick(card)
  }
  
  return (
    <div className="template-card">
      <div className="card">
        <img 
          src={card.link} 
          alt={card.name} 
          className="card__image"
          onClick={handleClick}
        />
        <h3 className="card__title">{card.name}</h3>
        <button 
          type="button" 
          className="card__trash-button">
        </button>
        <div className="card__like-container">
          <button 
            type="button" 
            className="card__like-button"> 
          </button>
          <p className="card__like-quantity">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
