import axios from 'axios';

const BASE_URL = 'http://localhost:5122/contacts';

export const getContacts = () => {
    const url = `${BASE_URL}`;
    return axios.get(url);
};

export const postContact = (data) => {
    const url = `${BASE_URL}`;
    return axios.post(url, data);
};
