import styles from './header.module.css';

export function Card() {
    const cardData = [
        { id: '1', path: '', label: 'Inicio' },
        { id: '2', path: 'todo', label: 'Tareas' },
    ];

    return (
        <>
            {menuOptions.map((item) => (
                <div className="card character__card">
                    <img
                        src="../img/no-one.jpg"
                        alt=" ${item.name} ${item.family} "
                        className="character__picture card-img-top"
                    />
                    <div className="card-body">
                        <h2 className="character__name card-title h4">
                            ${item.name} ${item.family}
                        </h2>
                        <div className="character__info">
                            <ul className="list-unstyled">
                                <li>Edad: ${item.age} años</li>
                                <li>
                                    Estado:
                                    <i className="fas fa-thumbs-down"></i>
                                    <i className="fas fa-thumbs-up"></i>
                                </li>
                            </ul>
                        </div>
                        <div className="character__overlay">
                            <ul className="list-unstyled">
                                <li>Años de reinado: ${item.kingdomYears}</li>
                                <li>Arma: ${item.weapon}</li>
                                <li>Destreza: ${item.skill} </li>
                                <li>Peloteo: ${item.patheticLevel} </li>
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
            ))}
        </>
    );
}
