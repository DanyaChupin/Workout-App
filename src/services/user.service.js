import { $axios } from '../api'

const USERS = '/users'
export const UserService = {
	getProfile: async () => {
		return $axios.get(`${USERS}/profile`)
	}
}
