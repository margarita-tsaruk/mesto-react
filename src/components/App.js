import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ConfirmationPopup from './ConfirmationPopup.js';
import api from '../utils/api.js';

function App() {
  const [isEditProfileOpen, setEditProfileOpen] = useState(false);
  const [isAddPlaceOpen, setAddPlaceOpen] = useState(false);
  const [isEditAvatarOpen, setEditAvatarOpen] = useState(false);
  const [isImageOpen, setImageOpen] = useState(false);
  const [isСonfirmationOpen, setСonfirmationOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState([]);
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    api.getData()
      .then(([userData, cardsData]) => {
        setCurrentUser(userData)
        setCards(cardsData)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  function handleEditProfileClick() {
    setEditProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlaceOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarOpen(true);
  }

  function handleTrashButtonClick(card) {
    setSelectedCard(card);
    setСonfirmationOpen(true);
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
    setСonfirmationOpen(false)
  }

  function handleUpdateUser(value) {
    api.setUserInfo(value.name, value.about)
      .then((res) => {
        setCurrentUser(prevState => {
          return {
            ...prevState,
            name: res.name,
            about: res.about,
          }
        })
        
        closeAllPopups();

      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleUpdateAvatar(inputValue) {
    api.setUserAvatar(inputValue.avatar)
      .then((res) => {
        setCurrentUser(prevState => {
          return {
            ...prevState,
            avatar: res.avatar
          }
        })
        
        closeAllPopups();

      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card, !isLiked) 
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleCardDelete(card) {
    api.deleteCard(card)
      .then(() => {
        closeAllPopups()
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleAddPlace(card) {
    api.addCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
  }
  
  return (
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header />
          <Main 
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onConfirmation={handleTrashButtonClick}
            cards={cards}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfileOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <AddPlacePopup 
            isOpen={isAddPlaceOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlace}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar} 
          />
          <ImagePopup 
            isOpen={isImageOpen}
            card={selectedCard}
            onClose={closeAllPopups}
          />
           <ConfirmationPopup 
            isOpen={isСonfirmationOpen}
            onClose={closeAllPopups}
            card={selectedCard}
            setSelectedCard={setSelectedCard}
            onDeleteCard={handleCardDelete} 
          />
        </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
