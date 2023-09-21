import { FC, useState } from 'react'

import Input from './ui/Input'
import Wrapper from './ui/Wrapper'
import InputGroup from './ui/InputGroup'
import CounterButton from './ui/Buttons/CounterButton'
import DropDown from './ui/DropDown'
import CheckBox from './ui/CheckBox'
import Button from './ui/Buttons/Button'
import Line from './ui/Line'
import Switcher from './ui/Switcher'

import { FormData } from '../models/IFormData'

import useDarkSide from '../hooks/useDarkMode'

import { upArrow } from '../assets'
import { downArrow } from '../assets'
import { useUsers } from '../hooks/useUsers'

const initialValue = {
	name: 'Name',
	age: 'Age',
	option: 'Subscribed',
	isEmployed: false,
	id: null,
}

const Form: FC = () => {
	const [colorTheme, setTheme] = useDarkSide()
	const [isDarkSide, setIsDarkSide] = useState(
		colorTheme === 'light' ? true : false
	)
	const [formData, setFormData] = useState<FormData>(initialValue)

	const { addUser, deleteUser, activeId, setActiveId } = useUsers()

	const toggleDarkMode = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTheme(colorTheme)
		setIsDarkSide(e.target.checked)
	}

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData(prev => ({
			...prev,
			isEmployed: e.target.checked,
		}))
	}

	const changeOptionValue = (title: string) => {
		setFormData(prev => ({
			...prev,
			option: title,
		}))
	}

	const incrementAge = () => {
		if (typeof formData.age === 'string') {
			setFormData(prev => ({
				...prev,
				age: 0,
			}))
		}

		setFormData(prev => ({
			...prev,
			age: Number(prev.age) + 1,
		}))
	}

	const decrementAge = () => {
		if (typeof formData.age === 'string') {
			setFormData(prev => ({
				...prev,
				age: 0,
			}))
		}

		if ((formData.age as number) >= 1) {
			setFormData(prev => ({
				...prev,
				age: Number(prev.age) - 1,
			}))
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	const handleAddUser = () => {
		if (typeof +formData.age === 'number' && !isNaN(+formData.age)) {
			const data: FormData = {
				...formData,
				age: +formData.age,
				isEmployed: formData.isEmployed ? 'Employed' : 'Not Employed',
				id: Date.now(),
			}
			addUser(data)
			setFormData(initialValue)
		}
	}

	const handleDeleteUser = () => {
		if (typeof activeId === 'number') {
			deleteUser(activeId)
			setActiveId(null)
		}
	}

	return (
		<Wrapper className='basis-[30%]' label='Insert Row'>
			<Input
				onChange={handleChange}
				name='name'
				placeholder='Type a name'
				value={formData.name}
			/>
			<InputGroup>
				<Input
					onChange={handleChange}
					className='rounded-r-none'
					name='age'
					placeholder='Type an age'
					value={formData.age}
				/>
				<CounterButton
					className='border-r-[0.2px] border-r-white border-opacity-30'
					arrowImage={downArrow}
					onClick={decrementAge}
				/>
				<CounterButton
					className='rounded-r-md'
					arrowImage={upArrow}
					onClick={incrementAge}
				/>
			</InputGroup>
			<DropDown
				inputValue={formData.option}
				onChange={handleChange}
				changeOptionValue={changeOptionValue}
			/>
			<CheckBox
				checked={formData.isEmployed as boolean}
				onChange={handleCheckboxChange}
			/>
			<Button title='Insert' onClick={handleAddUser} />
			<Line />
			<Switcher label='Mode' onChange={toggleDarkMode} checked={isDarkSide} />
			<Button title='Delete' onClick={handleDeleteUser} />
		</Wrapper>
	)
}

export default Form
