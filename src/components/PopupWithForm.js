import closeIcon from '../images/Close_Icon.svg';

export default function PopupWithForm({isOpen, onClose, children}) {
  return (
    <>
      <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <button type="button" name="close_button" onClick={onClose} className="popup__close">
            <img src={closeIcon} className="popup__close-image" alt="Кнопка закрытия окна" />
          </button>
          {children}
        </div>
      </div>
    </>
  )
}
