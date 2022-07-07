import { useState, useEffect } from 'react';

import api from '../utils/api.js';
import Card from './Card.js';

function Main( {onEditProfile, onAddPlace, onEditAvatar, onCardClick} ) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    api.getData()
      .then(([userData, cardsData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <div className="content">
      <section className="profile">
        <div className="profile__avatar"
          onClick={onEditAvatar}
          style={{ backgroundImage: `url(${userAvatar})` }}
        >
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button 
            type="button" 
            className="profile__edit-button" 
            onClick={onEditProfile}
          >
          </button>
            <p className="profile__job">{userDescription}</p>
          </div>
          <button 
            type="button" 
            className="profile__add-button" 
            onClick={onAddPlace}>
          </button>
      </section>
      <section className="cards">
        <div className="cards__container">
          { cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={onCardClick}
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Main;