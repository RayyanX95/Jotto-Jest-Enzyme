import axios from 'axios';

export const getSecretWord = () => {
  // TODO: write actual actions in Redux / context sections
  return axios.get('http://localhost:3030')
    .then(res => res.data);
}