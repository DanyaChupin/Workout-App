import Auth from '../screens/auth/Auth'
import ExerciseLog from '../screens/exerciseLog/ExerciseLog'
import Home from '../screens/home/Home'
import NewExercise from '../screens/newExercise/NewExercise'
import NewWorkout from '../screens/newWorkout/NewWorkout'
import Profile from '../screens/profile/Profile'
import Workout from '../screens/workouts/detail/Workout'
import ListWorkout from '../screens/workouts/list/ListWorkout'

export const routes = [
	{
		path: '/',

		component: Home,
		isAuth: false
	},
	{
		path: '/auth',

		component: Auth,
		isAuth: false
	},
	{
		path: '/profile',

		component: Profile,
		isAuth: true
	},
	{
		path: '/new-workout',

		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/new-exercise',

		component: NewExercise,
		isAuth: true
	},
	{
		path: '/workout/:id',

		component: Workout,
		isAuth: true
	},
	{
		path: '/workouts',

		component: ListWorkout,
		isAuth: true
	},
	{
		path: '/exercise/:id',

		component: ExerciseLog,
		isAuth: true
	}
]
