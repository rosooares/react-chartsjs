import axios from 'axios';

export function getAnual() {
    return axios
    .get('https://private-afe609-testefront.apiary-mock.com/anual-result')
    .then(response => response.data)
    .catch(error => console.log('error', error))
};

export function getAnualPercentage() {
    return axios
    .get('https://private-afe609-testefront.apiary-mock.com/anual-percentage')
    .then(response => response.data)
    .catch(error => console.log('error', error))
};

