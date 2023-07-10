import styles from './Field.module.scss'

const Field = ({ register, name, error, options, ...rest }) => {
	return (
		<div>
			<input {...register(name, options)} {...rest} className={styles.input} />
			{error && <div className='error'>{error}</div>}
		</div>
	)
}

export default Field
