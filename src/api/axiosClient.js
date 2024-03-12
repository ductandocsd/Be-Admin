import axios from 'axios';
import * as process from 'process';

const axiosClient = axios.create({
	baseURL: process.env.REACT_APP_URL_API,
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify(),
})

const user = localStorage.getItem("user");
const tokenString = JSON.parse(user);
let token = tokenString?.token_info?.access_token

if (token) {
	axiosClient.defaults.headers.common['Authorization'] =  'Bearer ' + token;
}

export default axiosClient;
