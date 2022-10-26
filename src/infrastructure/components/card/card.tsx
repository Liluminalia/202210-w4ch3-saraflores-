import { characters } from '../../../data/characters';
import { King } from '../../../data/king';
import { Fighter } from '../../../data/fighter';
import { Squire } from '../../../data/squire';

export function Card() {
    return (
        <>
            <div className="app container">
                <ul className="characters-list row list-unstyled">
                    {characters.map((item) => (
                        <li key={item.id} className="character col">
                            <div className="card character__card">
                                <img
                                    src={
                                        './assets/' +
                                        item.name.toLowerCase() +
                                        '.jpg'
                                    }
                                    alt={`${item.name}  ${item.family}`}
                                    className="character__picture card-img-top"
                                />
                                <div className="card-body">
                                    <h2 className="character__name card-title h4">
                                        {item.name + ' ' + item.family}
                                    </h2>
                                    <div className="character__info">
                                        <ul className="list-unstyled">
                                            <li>Edad: {item.age} años</li>
                                            <li>
                                                Estado:
                                                <i className="fas fa-thumbs-down"></i>
                                                <i className="fas fa-thumbs-up"></i>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="character__overlay">
                                        <ul className="list-unstyled">
                                            <li>
                                                Años de reinado: $
                                                {(item as King).kingdomYears ===
                                                undefined
                                                    ? ''
                                                    : (item as King)
                                                          .kingdomYears}
                                            </li>
                                            <li>
                                                Arma: $
                                                {(item as Fighter).weapons}
                                            </li>
                                            <li>
                                                Destreza: $
                                                {(item as Fighter).skill}{' '}
                                            </li>
                                            <li>
                                                Peloteo: $
                                                {(item as Squire).patheticLevel}{' '}
                                            </li>
                                            <li>Asesora a: </li>
                                            <li>Sirve a: </li>
                                        </ul>
                                        <div className="character__actions">
                                            <button className="character__action btn">
                                                habla
                                            </button>
                                            <button className="character__action btn">
                                                muere
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <i className="emoji"></i>
                            </div>
                        </li>
                    ))}
                </ul>
                <slot></slot>
                <div className="comunications">
                    <p className="comunications__text display-1">A phrase</p>
                    <img
                        className="comunications__picture"
                        src="img/no-one.jpg"
                        alt="Name and family of speaker"
                    />
                </div>
            </div>
        </>
    );
}
