import { useState } from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({hero}) => {
    const [onMouseEnterState, setOnMouseEnterState] = useState('');
    const {id, superhero, alter_ego, first_appearance, characters} = hero;

    const handleMouseAction = (isOver) => {
        let card_focus_style = 'border-info  text-info'
        setOnMouseEnterState(isOver ? card_focus_style : '');
    }

    return (
        <div
            className={`card ms-3 ${onMouseEnterState} animate__animated animate__fadeIn`}
            onMouseEnter={ () => handleMouseAction(true) }
            onMouseLeave={ () => handleMouseAction(false) }
            style={{ maxWidth: '540px'}}
        >
            <div className='row no-gutters'>
                <div className='col-md-4'>
                    <img
                        src={`./assets/heroes/${id}.jpg`}
                        alt={"hero-img"}
                        className="card-img"
                        style={{objectFit: 'cover',
                                height: '100%'}}
                    />
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h5 className='card-title'> { superhero.slice(0,10) }... </h5>
                        {
                            alter_ego === characters ? (
                                <p className='card-text'> { alter_ego.slice(0,10) }... </p>
                            ) : (
                                <p className='card-text'> { characters.slice(0,10) }... </p>
                            )
                        }
                        <p className='card-text'>
                            <small className='text-muted'> { first_appearance.slice(0,14) }... </small>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <Link to={`./heroe/${id}`}>
                    <button className='btn btn-block btn-outline-info'> Ver más </button>
                </Link>
            </div>
        </div>
    )
}

