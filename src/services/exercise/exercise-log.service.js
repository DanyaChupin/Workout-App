import { $axios } from '../../api'

import { EXERCISES } from './exercise.service'

const LOG = `${EXERCISES}/log`
const ExerciseLogService = {
	getById: async id => {
		return $axios.get(`${LOG}/${id}`)
	},
	create: async exerciseId => {
		return $axios.post(`${LOG}/${exerciseId}`)
	},
	// "weight":
	// "repeat":
	// "isComplleted": true
	updateTime: async (body, timeId) => {
		return $axios.put(`${LOG}/time/${timeId}`, body)
	},
	// isComplited
	complete: async (id, body) => {
		return $axios.patch(`${LOG}/complete/${id}`, body)
	}
}
export default ExerciseLogService
