import { forwardRef } from 'react'
import { cn } from '../../../helpers/cn'

interface CounterButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	arrowImage: string
}

const CounterButton = forwardRef<HTMLButtonElement, CounterButtonProps>(
	({ className, arrowImage, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={cn(
					'bg-grey flex items-center justify-center w-9 h-[38px] text-sm transition-all hover:opacity-70',
					className
				)}
				{...props}
			>
				<img width={14} height={14} src={arrowImage} alt='' />
			</button>
		)
	}
)

export default CounterButton
