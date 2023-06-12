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
export const postGroup = (data) => {
    const url = `${BASE_URL}`;
    return axios.post(url, data);
};
export const deleteGroup = (id) => {
    const url = `${BASE_URL}/${id}`;
    return axios.delete(url);
};
export const putGroup = (data, id) => {
    const url = `${BASE_URL}/${id}`;
    return axios.put(url, data);
};
