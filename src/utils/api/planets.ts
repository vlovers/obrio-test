import axios from 'axios';

const planets = {
    getPlanets: (planetsPage: number ) => axios.get(`https://swapi.dev/api/planets/?page=${planetsPage}`),
    getPlanetByURL: (url: string) => axios.get(`${url}`),

};

export default planets;