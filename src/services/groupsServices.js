import axios from 'axios';

const BASE_URL = 'http://localhost:5122/groups';

export const getAllgroups = () => {
    const url = `${BASE_URL}`;
    return axios.get(url);
};
export const getgroup = (id) => {
    const url = `${BASE_URL}/${id}`;
    return axios.get(url);
};
