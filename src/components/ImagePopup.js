import closeIcon from '../images/Close_Icon.svg';

export default function ImagePopup(props) {
  return (
    <div className={`popup ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container-image">
        <button type="button" name="close_button" onClick={props.onClose} className="popup__close">
          <img src={closeIcon} className="popup__close-image" alt="Кнопка закрытия окна" />
        </button>
        <img src={props.card.link} className="popup__image" alt={props.card.name} />
        <h2 className="popup__header">{props.card.name}</h2>
      </div>
    </div>
  )
}
