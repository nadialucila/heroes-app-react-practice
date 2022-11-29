import { heroes } from "../data/heroes";

export const getHeroesByName = ( name = '' ) => {
    if (name === '') {
        return heroes;
    }
    name = name.toLocaleLowerCase();
    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes(name));
}