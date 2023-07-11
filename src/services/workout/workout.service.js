import { $axios } from '../../api'

export const WORKOUTS = '/workouts'
const WorkoutService = {
	getAll: async () => {
		return $axios.get(WORKOUTS)
	},
	getById: async id => {
		return $axios.get(`{$WORKOUTS}/${id}`)
	},
	//name,exerciseIds
	create: async body => {
		return $axios.post(WORKOUTS, body)
	},
	update: async (body, exerciseId) => {
		return $axios.put(`${WORKOUTS}/${exerciseId}`, body)
	},
	delete: async id => {
		return $axios.delete(`${WORKOUTS}/${id}`)
	}
}

export default WorkoutService
