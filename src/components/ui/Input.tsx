import { forwardRef } from 'react'
import { cn } from '../../helpers/cn'

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, TextFieldProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type || 'text'}
				className={cn(
					'text-sm w-full border border-grey py-2 px-3 rounded-md bg-transparent focus-visible:outline-none placeholder:text-sm',
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)

export default Input
