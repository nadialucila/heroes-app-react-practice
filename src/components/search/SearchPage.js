import React, { useState } from 'react'
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';

export const SearchPage = ({history}) => {

    const {values, handleInputChange} = useForm({search: ''});
    const {search} = values;
    const heroesFiltered = heroes;

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ search }`);
    }

    return (
        <div>
            <h1> Search Page </h1>
            <hr/>

            <div className='row'>
                <div className='col-5'>
                    <h4> Search Form </h4>
                    <hr/>
                    <form onSubmit={ handleSearch }>
                        <input
                            type='text'
                            value={ search }
                            placeholder='Buscar'
                            className='form-control'
                            onChange={ handleInputChange }
                            name='search'
                        />
                        <button
                            type='submit'
                            className='btn mt-1 btn-block btn-outline-primary'
                        >
                            Buscar
                        </button>
                    </form>
                </div>
                <div className='col-7'>
                    <h4> Resultados </h4>
                    <hr/>
                    {
                        heroesFiltered.map( heroe => (
                            <HeroCard hero={heroe} />
                        ) )
                    }
                </div>
            </div>
        </div>
    )
}
