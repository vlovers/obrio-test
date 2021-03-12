import axios from 'axios';

const planets = {
    getPlanets: () => axios.get("https://swapi.dev/api/planets/")
};

export default planets;