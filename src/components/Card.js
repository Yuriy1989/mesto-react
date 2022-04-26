import trash from '../images/Trash.svg';

export default function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="cards__item" >
      <img src={props.card.link} alt={props.card.name} onClick={handleClick} className="cards__image" />
      <button type="button" name="button-delete" onClick={props.onDeleteCard} id={props.userId} className="cards__button-delete">
        <img src={trash} alt="Урна" className="cards__delete" />
      </button>
      <div className="cards__description">
        <h2 className="cards__text">{props.card.name}</h2>
        <div className="cards__block-likes">
          <button type="button" name="button-like" className="cards__button"></button>
          <span className="cards__amount-like">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}
