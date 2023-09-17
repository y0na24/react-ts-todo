import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type Theme = 'dark' | 'light'
type ThemeSetter = Dispatch<SetStateAction<Theme>>

type UseDarkSideHook = () => [Theme, ThemeSetter]

const useDarkSide: UseDarkSideHook = () => {
	const [theme, setTheme] = useState<Theme>(localStorage.theme)
	const colorTheme = theme === 'dark' ? 'light' : 'dark'

	useEffect(() => {
		const root = document.documentElement
		root.classList.remove(colorTheme)
		root.classList.add(theme)

		localStorage.setItem('theme', theme)
	}, [theme, colorTheme])

	return [colorTheme, setTheme]
}

export default useDarkSide
