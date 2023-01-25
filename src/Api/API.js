import axios from 'axios';
axios.defaults.baseURL = 'https://63d12ad9d5f0fa7fbdc5878e.mockapi.io';

export const getContacts = async() => {
    const {data} = await axios.get('/Phonebook');
    return data;
};

export const postContacts = async contact => {
    const {data} = await axios.post('/Phonebook', contact);
    return data;
};

export const deleteContacts= async id => {
    const {data} = await axios.delete(`/Phonebook/${id}`);
    return data;
};