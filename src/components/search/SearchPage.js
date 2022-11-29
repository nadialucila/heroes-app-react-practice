import React, { useEffect, useMemo, useState } from 'react'
import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
import {useForm} from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { heroes } from '../../data/heroes';

export const SearchPage = ({history}) => {

    const location = useLocation();
    const {q = ''} = queryString.parse(location.search); // q igual a string vacio para que no me de undefined
    const [{busqueda}, handleInputChange] = useForm({busqueda: q});

     const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ busqueda }`);
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
                            type="text"
                            className="form-control"
                            name="busqueda"
                            value={ busqueda }
                            onChange={ handleInputChange  }
                        />
                        <button
                            type="submit"
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
                            <HeroCard key={heroe.id} hero={heroe} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
