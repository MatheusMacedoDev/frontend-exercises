import './Imports.css';
import './EventCard.css';

const EventCard = ({title, description, buttonText}) => {
    return (
        <div className="card">
            <h3 className="card__title">{title}</h3>
            <p className="card__text">{description}</p>
            <button className="card__connect-button">{buttonText}</button>
        </div>
    )
}

export default EventCard;