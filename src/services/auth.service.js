import Cookies from 'js-cookie'

import { $axios } from '../api'
import { TOKEN } from '../app.constants'

const AUTH = '/auth'
export const AuthService = {
	main: async (email, password, type) => {
		try {
			const { data } = await $axios.post(`${AUTH}/${type}`, {
				email,
				password
			})
			if (data.token) Cookies.set(TOKEN, data.token)
			return data
		} catch (error) {
			throw new Error(error)
		}
	}
}
