import React, {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

export default function App() {
  const [selectedCard, setselectedCard] = useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  const [isEditAvatarPopupOpen, setOpenEditAvatarPopup] = useState(false);
  const [isEditProfilePopupOpen, setOpenPopupEditProfile] = useState(false);
  const [isAddPlacePopupOpen, setOpenAddPlacePopup] = useState(false);
  const [isDeleteCardPopupOpen, setOpenDeleteCardPopup] = useState(false);

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setselectedCard(card);
  }

  const handleEditAvatarClick = () => {
    setOpenEditAvatarPopup(true);
  }

  const handleEditProfileClick = () => {
    setOpenPopupEditProfile(true);
  }

  const handleAddPlaceClick = () => {;
    setOpenAddPlacePopup(true);
  }

  const handleDeleteClickCard = () => {
    setOpenDeleteCardPopup(true);
  }

  const closeAllPopups = () => {
    setOpenEditAvatarPopup(false);
    setOpenPopupEditProfile(false);
    setOpenAddPlacePopup(false);
    setOpenDeleteCardPopup(false);
    setIsImagePopupOpen(false);
    setselectedCard({});
  }

  return (
    <>
      <Header />
      <Main onEditAvatar = {handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace = {handleAddPlaceClick} onDeleteCard = {handleDeleteClickCard} onCardClick = {handleCardClick}/>
      <Footer />
      { isImagePopupOpen && <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isImagePopupOpen} /> }

      {
        isEditAvatarPopupOpen && <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}>
          <form method="post" action="#" name="avatar-form" className="popup__form popup__form_edit_avatar" noValidate>
            <h2 className="popup__title">Обновить Аватар</h2>
            <input id="avatar" type="url" autoComplete="off" name="avatar" placeholder="Ссылка на новый аватар" defaultValue="" className="popup__input popup__input_avatar_link" required />
            <span className="popup__error-text avatar-error"></span>
            <input type="submit" className="popup__button popup__button_edit_avatar" value="Сохранить" />
          </form>
        </PopupWithForm>
      }

      {
        isEditProfilePopupOpen && <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}>
          <form method="post" action="#" name="profile-form" className="popup__form popup__form_edit-profile" noValidate>
            <h2 className="popup__title">Редактировать профиль</h2>
            <input id="name" type="text" autoComplete="off" name="name" defaultValue="" className="popup__input popup__input_string_name" required minLength="2" maxLength="40" />
            <span className="popup__error-text name-error"></span>
            <input id="about" type="text" autoComplete="off" name="about" defaultValue="" className="popup__input popup__input_string_text" required minLength="2" maxLength="200" />
            <span className="popup__error-text about-error"></span>
            <input type="submit" className="popup__button" value="Сохранить" />
          </form>
        </PopupWithForm>
      }

      {
        isAddPlacePopupOpen && <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}>
          <form method="post" action="#" name="card-form" className="popup__form popup__form_add-card" noValidate>
            <h2 className="popup__title">Новое место</h2>
            <input id="nameCard" type="text" autoComplete="off" placeholder="Название" name="name" defaultValue="" className="popup__input popup__input_string-name" required minLength="2" maxLength="30" />
            <span className="popup__error-text nameCard-error"></span>
            <input id="link" type="url" autoComplete="off" placeholder="Ссылка на картинку" name="link" defaultValue="" className="popup__input popup__input_string-text" required />
            <span className="popup__error-text link-error"></span>
            <input type="submit" className="popup__button" value="Создать" />
          </form>
        </PopupWithForm>
      }

      {
        isDeleteCardPopupOpen && <PopupWithForm
          isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups}>
          <form method="post" action="#" name="card-delete-form" className="popup__form popup__form_delete-card" noValidate>
            <h2 className="popup__title">Вы уверены</h2>
            <input type="submit" className="popup__button popup__button_delete" value="Да" />
          </form>
        </PopupWithForm>
      }
    </>
  );
}
