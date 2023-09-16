import { FC } from 'react'
import { Option } from '../../models/IOptions'

interface OptionItemProps {
	option: Option
  setOptionValue: (title: string) => void
}

const OptionItem: FC<OptionItemProps> = ({ option, setOptionValue }) => {
	return (
		<li
			onClick={() => setOptionValue(option.title)}
			className='block cursor-pointer px-4 py-2 transition-all hover:bg-secondary dark:hover:bg-gray-600 dark:hover:text-white'
		>
			{option.title}
		</li>
	)
}

export default OptionItem
