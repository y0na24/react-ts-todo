import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	label?: string
}

const Wrapper: FC<WrapperProps> = ({
	children,
	className,
	label,
	...props
}) => {
	return (
		<div
			className={cn(
				'flex flex-col h-fit gap-5 rounded-sm p-2 border-grey border relative',
				className
			)}
			{...props}
		>
			<span className='text-xs absolute top-[-10px]'>{label}</span>
			{children}
		</div>
	)
}

export default Wrapper
