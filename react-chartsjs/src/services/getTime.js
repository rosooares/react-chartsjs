import axios from 'axios';

export function getTime() {
    return axios
    .get('https://private-afe609-testefront.apiary-mock.com/time-data')
    .then(response => response.data)
    .catch(error => console.log('error', error))
};