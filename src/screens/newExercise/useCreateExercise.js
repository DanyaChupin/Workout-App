import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'

import ExerciseService from '../../services/exercise/exercise.service'

export const useCreateExercise = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const { isSuccess, error, isLoading, mutate } = useMutation(
		['create exercise'],
		body => {
			ExerciseService.create(body),
				{
					onSuccess: () => reset()
				}
		}
	)
	const onSubmit = (name, time, iconPath) => {
		mutate(name, time, iconPath)
	}
	return useMemo(
		() => ({
			error,
			isSuccess,
			register,
			handleSubmit,
			errors,
			isLoading,
			onSubmit,
			control
		}),
		[errors, isLoading, isSuccess, error]
	)
}
