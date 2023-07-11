import Auth from '../screens/auth/Auth'
import Home from '../screens/home/Home'
import NewExercise from '../screens/newExercise/NewExercise'
import NewWorkout from '../screens/newWorkout/NewWorkout'
import Profile from '../screens/profile/Profile'
import ListWorkout from '../screens/workout/ListWorkout'
import Workout from '../screens/workout/Workout'

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
	}
]
