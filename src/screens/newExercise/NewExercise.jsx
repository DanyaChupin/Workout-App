import cn from 'clsx'
import { Controller } from 'react-hook-form'

import Field from '../../components/ui/Field/Field'
import Alert from '../../components/ui/alert/Alert'
import Button from '../../components/ui/button/Button'
import Loader from '../../components/ui/loader/Loader'

import Layout from '../../components/layout/Layout'

import styles from './NewExercise.module.scss'
import { getIconPath } from './iconPath.util'
import { useCreateExercise } from './useCreateExercise'

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']
const NewExercise = () => {
	const {
		error,
		errors,
		isLoading,
		isSuccess,
		onSubmit,
		register,
		handleSubmit,
		control
	} = useCreateExercise()

	return (
		<>
			<Layout
				bgImage={''}
				heading='Create new exercise'
				backLink='/new-workout'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Exercise created' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						register={register}
						options={{
							required: 'Name is required'
						}}
						name='name'
						placeholder='Enter Name'
					/>
					<Field
						error={errors?.times?.message}
						register={register}
						options={{
							valueAsNumber: true,
							validate: value => value > 0 || 'Times must be number',
							required: 'Times is required'
						}}
						name='times'
						placeholder='Enter Times'
					/>
					<Controller
						name='iconPath'
						control={control}
						render={({ field: { value, onChange } }) => (
							<div className={styles.images}>
								{data.map(name => (
									<img
										key={`ex img ${name}`}
										src={`${import.meta.env.VITE_SERVER_URL}${getIconPath(
											name
										)}`}
										alt={name}
										className={cn({
											[styles.active]: value === getIconPath(name)
										})}
										onClick={() => onChange(getIconPath(name))}
										draggable={false}
										height='45'
									/>
								))}
							</div>
						)}
					/>
					{errors?.iconPath && (
						<div className='error'>{error?.iconPath?.message}</div>
					)}
					<Button clickHandler={() => {}}>Create</Button>
				</form>
			</div>
		</>
	)
}
export default NewExercise
