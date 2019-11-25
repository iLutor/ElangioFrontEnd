import axios from 'axios'
import { BASE_URL } from '../utils/Utils'

export const signIn = (data) => {
	const headers = {
		'Content-Type': 'application/json',
	}

	return axios({
		method: 'post',
		url: BASE_URL + '/users/log_in',
		data,
		headers,
	})
		.then(response => response.data)
}

export const signUp = (data, onSuccess, onError) => {
	const headers = {
		'Content-Type': 'application/json',
	}

	return axios({
		method: 'post',
		url: BASE_URL + '/users/sign_up',
		data,
		headers,
	})
		.then(() => (onSuccess()))
		.catch((error) => (onError(error)))
}

export const signOut = () => {
	localStorage.clear()
}

