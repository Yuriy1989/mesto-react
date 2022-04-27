import React, { useState, useEffect } from 'react';
import edit_button from '../images/edit_button.svg';
import Card from './Card';
import { api } from '../utils/Api';

function Main( {onEditAvatar, onEditProfile, onAddPlace, onDeleteCard, onCardClick} ) {
  let userId;
  let [userData, setUserData] = useState({});
  let [cardData, setCardData] = useState([]);

  const GetUser = () => {
    api.getInfoUser()
    .then(res => {
      userId = res._id;
      userData = {
        userName: res.name,
        userDescription: res.about,
        userAvatar: res.avatar
      }
      setUserData(userData);
    })
    .catch((res) => console.log(res))
  }

  const GetCards = () => {
    api.getInitialCards()
      .then(res => {
        const formattedCard = res.map((cardData) => {
          return {
            id: cardData._id,
            name: cardData.name,
            link: cardData.link,
            likes: cardData.likes,
            idUserCreateCard: cardData.owner._id
          }
        })
        setCardData(formattedCard);
      })
      .catch((res) => console.log(res))
  }

  React.useEffect(() => {
    GetUser();
    GetCards();
  }, []);

  return (
    <>
      <main className="main">
        <section className="profile">
          <button type="button" onClick={onEditAvatar} name="edit_avatar" style={{ backgroundImage: `url(${userData.userAvatar})` }}  className="profile__avatar"></button>
          <div className="profile__info">
            <div className="profile__wrapper">
              <h1 className="profile__title">{userData.userName}</h1>
              <button type="button" onClick={onEditProfile} name="edit_button" className="profile__edit-button">
                <img src={edit_button} alt="Кнопка, по центру нарисован карандаш" className="profile__edit-button-image" />
              </button>
            </div>
            <p className="profile__text">{userData.userDescription}</p>
          </div>
          <button type="button" onClick={onAddPlace} name="profile__add-button" className="profile__add-button"></button>
        </section>
        <section className="elements">
          <ul className="cards">
            {
              cardData.map((card) => (
                <Card card={card} userId = {userId} key={card.id} onDeleteCard={onDeleteCard} onCardClick={onCardClick}/>
              ))
            }
          </ul>
        </section>
      </main>
    </>
  )
}

export default Main;
