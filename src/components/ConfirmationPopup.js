import PopupWithForm from './PopupWithForm';

function ConfirmationPopup( {isOpen, onClose, cards, onDeleteCard} ) {

  function handleSubmit(event) {
    event.preventDefault();
    
    cards.map((card) =>  onDeleteCard(card))
  }

  return (
    <PopupWithForm
      name="confirmation"
      title="Вы уверены?" 
      type="updated"
      button="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
    </PopupWithForm>
  )
}

export default ConfirmationPopup;