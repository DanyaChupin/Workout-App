import styles from '../ExerciseLog.module.scss'

import { menu } from './tableHeader.menu'

const TableHeader = () => {
	return (
		<div className={styles.row}>
			{menu.map((item, index) => (
				<div key={index}>
					<span>{item.title}</span>
				</div>
			))}
		</div>
	)
}
export default TableHeader
