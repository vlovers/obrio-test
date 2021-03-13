import axios from 'axios';

const peoples = {
    getPeoplesByUrl: (url: string) => axios.get(url),

};

export default peoples;