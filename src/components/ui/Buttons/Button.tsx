import { forwardRef } from 'react'

import { cn } from '../../../helpers/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	title: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ title, className, ...props }, ref) => {
		return (
			<button className={cn('bg-grey rounded-md py-2 transition-all hover:opacity-80', className)} ref={ref} {...props}>
				{title}
			</button>
		)
	}
)

export default Button
