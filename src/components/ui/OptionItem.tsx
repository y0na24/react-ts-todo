import { FC } from 'react'

import { Option } from '../../models/IOptions'
import { cn } from '../../helpers/cn'

interface OptionItemProps extends React.HTMLAttributes<HTMLLIElement> {
	option: Option
	setOptionValue: (title: string) => void
	isActive: boolean
}

const OptionItem: FC<OptionItemProps> = ({
	option,
	className,
	isActive,
	setOptionValue,
}) => {

	return (
		<li
			onClick={() => setOptionValue(option.title)}
			className={cn(
				'block cursor-pointer px-4 py-2 transition-all hover:bg-secondary dark:hover:bg-gray-600 dark:hover:text-white',
				className,
				{
					'bg-secondary': isActive,
				}
			)}
		>
			{option.title}
		</li>
	)
}

export default OptionItem
