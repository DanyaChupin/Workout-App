import { AiOutlineUser } from 'react-icons/ai'
import { TbArrowLeft } from 'react-icons/tb'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'

const Header = ({ backLink }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const { isAuth } = useAuth()
	return (
		<header className={styles.header}>
			<div>
				{isAuth && pathname !== '/profile' && (
					<button
						onClick={() => {
							if (isAuth) {
								navigate('/profile')
							} else {
								navigate('/auth')
							}
						}}
					>
						<AiOutlineUser />
					</button>
				)}
				{pathname !== '/' && pathname !== '/auth' && (
					<button
						onClick={() => {
							navigate('/')
						}}
					>
						<TbArrowLeft />
					</button>
				)}
			</div>

			<Hamburger />
		</header>
	)
}

export default Header
