import axios from 'axios';
// default backemd api url
axios.defaults.baseURL = 'http://localhost:8000/api/';

// default hrader auth  token retriever
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');