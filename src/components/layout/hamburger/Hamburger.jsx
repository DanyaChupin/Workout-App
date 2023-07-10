import { MdClose } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'

import { useOnClickOutside } from '../../../hooks/useOutSide'

import styles from './Hamburger.module.scss'
import Menu from './Menu'

const Hamburger = () => {
	const { isShow, setIsShow, ref } = useOnClickOutside(false)

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? (
					<MdClose className={styles.buttonIcon} />
				) : (
					<RxHamburgerMenu className={styles.buttonIcon} />
				)}
			</button>
			<Menu isShow={isShow} setIsShow={setIsShow} />
		</div>
	)
}

export default Hamburger
