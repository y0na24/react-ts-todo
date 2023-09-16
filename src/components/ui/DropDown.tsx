import { FC, useState } from 'react'

import Input from './Input'
import InputGroup from './InputGroup'
import CounterButton from './Buttons/CounterButton'
import OptionList from './OptionList'
import OptionItem from './OptionItem'

import { cn } from '../../helpers/cn'
import { Option } from '../../models/IOptions'
import { downArrow } from '../../assets'

interface DropDownProps {
	inputValue: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	changeOptionValue: (title: string) => void
}

const options: Option[] = [
	{ title: 'Subscribed', id: 1 },
	{ title: 'Not subscribed', id: 2 },
	{ title: 'Other', id: 3 },
]

const DropDown: FC<DropDownProps> = ({
	inputValue,
	onChange,
	changeOptionValue,
}) => {
	const [isMenuVisible, setIsMenuVisible] = useState(false)

	const handleClick = () => {
		setIsMenuVisible(!isMenuVisible)
	}

	const handleOptionChange = (value: string) => {
		changeOptionValue(value)
		setIsMenuVisible(false)
	}

	return (
		<div className='relative'>
			<InputGroup>
				<Input
					onChange={onChange}
					value={inputValue}
					name='option'
					className='rounded-r-none'
					placeholder='Choose an option'
				/>
				<CounterButton
					onClick={handleClick}
					className='rounded-r-md'
					arrowImage={downArrow}
				/>
			</InputGroup>
			<div
				className={cn(
					'z-10 hidden bg-grey w-full rounded-b-md absolute top-10 dark:bg-gray-700',
					{ block: isMenuVisible }
				)}
			>
				<OptionList
					options={options}
					renderOption={option => (
						<OptionItem
							key={option.id}
							option={option}
							setOptionValue={handleOptionChange}
						/>
					)}
				/>
			</div>
		</div>
	)
}

export default DropDown
