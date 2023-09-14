import axios from 'axios';

/// GLOBAL FUNCTION THAT MANAGES HTTP REQUESTS, TARGET URL CHANGES BASED ON ENVIROMENT VARIABLE

const BASE_URL =
	process.env.NODE_ENV === 'production'
		? 'https://fantasyfootballsquadbuilder.onrender.com'
		: 'http://localhost:8080';

const apiCall = (method, path, data) => {
	if (data)
		return axios[method](BASE_URL + path, data, { withCredentials: true });
	else return axios[method](BASE_URL + path, { withCredentials: true });
};

export default apiCall;