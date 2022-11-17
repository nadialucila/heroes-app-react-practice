import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroPage = ({history}) => {

    const {heroeId} = useParams()
    const hero = getHeroById(heroeId);

    if( hero === undefined ){
      return <Redirect to="/" />
    }

    const {id, superhero, publisher, alter_ego, first_appearance, characters} = hero;

    const handleReturn = () => {
        if( history.length >= 2 ) {
        history.push('/');
        } else {
        history.goBack();
        }
    }

    return (
        <div className='row mt-5'>
            <div className='col-4' >
            <img
                src={`../assets/heroes/${id}.jpg`}
                alt="heroe-img"
                style={{borderRadius: '20px',
                        boxShadow: '10px 10px gray',
                        maxWidth: '100%'}}
            />
            </div>
            <div className='col-8' style={{borderLeftStyle: 'solid', borderColor: 'gray'}}>
            <h3 > { superhero } </h3>
            <ul className='list list-group-flush'>
                <li className='list-group-item'> Alter ego: { alter_ego } </li>
                <li className='list-group-item'> Publisher: { publisher } </li>
                <li className='list-group-item'> First Appearance: { first_appearance } </li>
            </ul>
            <h5> Characters </h5>
            <p>
                {characters}
            </p>

            <button
                className='btn btn-block btn-outline-primary'
                style={{verticalAlign: 'bottom'}}
                onClick={ handleReturn }
            >
                Return
            </button>
            </div>
        </div>
    )
}
