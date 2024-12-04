import axios from 'axios';

const myapi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos/1', //Endpoint fake
});

export default myapi;