import { FC } from 'react'
import { Option } from '../../models/IOptions'

interface OptionListProps {
	options: Option[]
	renderOption: (option: Option) => JSX.Element
}

const OptionList: FC<OptionListProps> = ({ options, renderOption }) => {
	return (
		<ul className='py-2 text-sm text-gray-700 dark:text-gray-200'>
			{options.map(option => renderOption(option))}
		</ul>
	)
}

export default OptionList
