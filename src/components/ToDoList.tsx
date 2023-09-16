import { FC, useState } from 'react'

import Input from './ui/Input'
import Wrapper from './ui/Wrapper'
import InputGroup from './ui/InputGroup'
import CounterButton from './ui/Buttons/CounterButton'

import { FormData } from '../models/IFormData'

import { upArrow } from '../assets'
import { downArrow } from '../assets'
import DropDown from './ui/DropDown'
import CheckBox from './ui/CheckBox'
import Button from './ui/Buttons/Button'
import Line from './ui/Line'

const ToDoList: FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: 'Name',
		age: 'Age',
		option: 'Subscribed',
		isEmployed: false,
	})

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

	const hanldeSubmit = () => {
		console.log(formData)
	}

	return (
		<div className='bg-primary px-6 py-3 rounded-md w-[1024px] h-[750px]'>
			<Wrapper>
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
					checked={formData.isEmployed}
					onChange={handleCheckboxChange}
				/>
				<Button title='Insert' />
				<Line />
				<Button title='Delete'/>
			</Wrapper>
		</div>
	)
}

export default ToDoList
