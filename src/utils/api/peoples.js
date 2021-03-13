import axios from 'axios';

const peoples = {
    getPeoplesByUrl: (url) => axios.get(url),

};

export default peoples;