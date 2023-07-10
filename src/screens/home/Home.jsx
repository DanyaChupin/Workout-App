import { useNavigate } from 'react-router-dom'

import Button from '../../components/ui/button/Button'

import { useAuth } from '../../hooks/useAuth'

import Layout from '../../components/layout/Layout'

import Statistics from '../profile/statistics/Statistics'

import styles from './Home.module.scss'

const Home = () => {
	const navigate = useNavigate()
	const { isAuth } = useAuth()
	return (
		<Layout bgImage='/images/home-bg.jpg'>
			<Button clickHandler={() => navigate(isAuth ? '/new-workout' : '/auth')}>
				{isAuth ? 'New' : 'Sing In'}
			</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			{isAuth && <Statistics />}
		</Layout>
	)
}

export default Home
