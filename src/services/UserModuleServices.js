import axios from 'axios'
import { BASE_URL } from '../utils/Utils'

export const signIn = (data, onSuccess, onError) => {
	const headers = {
		'Content-Type': 'application/json',
	}

	return axios({
		method: 'post',
		url: BASE_URL + '/auth/sign_in',
		data,
		headers,
	})
	.then(() => (onSuccess()))
	.catch((error) => (onError(error)))
}

export const signUp = (data, onSuccess, onError) => {
	const headers = {
		'Content-Type': 'application/json',
	}

	return axios({
		method: 'post',
		url: BASE_URL + '/auth',
		data,
		headers,
	})
	.then(() => (onSuccess()))
	.catch((error) => (onError(error)))
}

export const signOut = () => {
	localStorage.clear()
}

