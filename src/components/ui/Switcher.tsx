import { forwardRef } from 'react'

import { cn } from '../../helpers/cn'

interface SwitcherProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string
}

const Switcher = forwardRef<HTMLInputElement, SwitcherProps>(
	({  className, label, ...props }, ref) => {
		return (
			<label className='relative inline-flex items-center mr-5 cursor-pointer'>
				<input
					ref={ref}
					type='checkbox'
					className='sr-only peer'
					{...props}
				/>
				<div
					className={cn(
						'w-11 h-6 bg-secondary rounded-full focus:ring-0 focus:ring-offset-0 peer  peer-focus:ring-0  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-0.5 after:left-[2px] after:bg-primary after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all dark:after:bg-white',
						className
					)}
				></div>
				<span className='ml-3 text-sm font-medium'>{label}</span>
			</label>
		)
	}
)

export default Switcher
