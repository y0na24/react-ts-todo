import { FC, useState } from 'react'
import Input from './Input'
import InputGroup from './InputGroup'
import CounterButton from './Buttons/CounterButton'
import { downArrow } from '../../assets'
import { cn } from '../../helpers/cn'

interface DropDownProps {}

const DropDown: FC<DropDownProps> = ({}) => {
	const [isMenuVisible, setIsMenuVisible] = useState(false)

	const handleClick = () => {
		setIsMenuVisible(!isMenuVisible)
	}

	return (
		<div className='relative'>
			<InputGroup>
				<Input className='rounded-r-none' placeholder='adsfdsf' />
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
				<ul
					className='py-2 text-sm text-gray-700 dark:text-gray-200'
				>
					<li>
						<a
							href='#'
							className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
						>
							Dashboard
						</a>
					</li>
					<li>
						<a
							href='#'
							className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
						>
							Settings
						</a>
					</li>
					<li>
						<a
							href='#'
							className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
						>
							Earnings
						</a>
					</li>
					<li>
						<a
							href='#'
							className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
						>
							Sign out
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default DropDown
