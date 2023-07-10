import { useEffect, useRef, useState } from 'react'

export const useOnClickOutside = isInitialValue => {
	const [isShow, setIsShow] = useState(isInitialValue)
	const ref = useRef(null)

	const handleClickOutSide = event => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutSide, true)
		return () => {
			document.removeEventListener('click', handleClickOutSide, true)
		}
	})

	return { ref, isShow, setIsShow }
}
