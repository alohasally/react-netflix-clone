import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params:{
        api_key:'7bef7af82ec6f6830f6c7a686c98feb9',
        language: 'en-US',
    }
});

export default instance;