import { FC, forwardRef } from 'react'

import { cn } from '../../helpers/cn'

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
	({ className, ...props }, ref) => {
		return (
			<div className='flex items-center'>
				<input
					ref={ref}
					id='checked-checkbox'
					type='checkbox'
					className={cn(
						'w-5 h-5 rounded-sm border-[1.5px] bg-transparent border-secondary text-secondary focus:ring-0 focus:ring-offset-0',
						className
					)}
					{...props}
				/>
				<label htmlFor='checked-checkbox' className='ml-2 text-sm'>
					Employed
				</label>
			</div>
		)
	}
)

export default CheckBox
