import axios from 'axios';

const planets = {
    getPlanets: (planetsPage ) => axios.get(`https://swapi.dev/api/planets/?page=${planetsPage}`),
    getPlanetByURL: (url) => axios.get(`${url}`),

};

export default planets;