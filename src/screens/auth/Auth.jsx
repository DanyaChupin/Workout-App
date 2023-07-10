import Field from '../../components/ui/Field/Field'
import Button from '../../components/ui/button/Button'
import Loader from '../../components/ui/loader/Loader'

import { useAuthPage } from '../../hooks/useAuthPage'

import Layout from '../../components/layout/Layout'

import styles from './Auth.module.scss'

const Auth = () => {
	const { errors, handleSubmit, isLoading, onSubmit, register, setType } =
		useAuthPage()

	return (
		<>
			<Layout heading='Sign in' bgImage='/public/images/auth-bg.jpg' />
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						register={register}
						options={{
							required: 'Email is required'
						}}
						name='email'
						placeholder='Enter email'
					/>
					<Field
						error={errors?.password?.message}
						register={register}
						options={{
							required: 'Password is required'
						}}
						name='password'
						placeholder='Enter password'
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('login')}>Sing in</Button>
						<Button lickHandler={() => setType('register')}>Sing up</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
