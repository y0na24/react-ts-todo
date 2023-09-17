import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode
}

const Wrapper: FC<WrapperProps> = ({ children, className, ...props }) => {
	return (
		<div
			className={cn(
				'flex flex-col h-fit gap-5 rounded-sm p-2 border-grey border',
				className
			)}
			{...props}
		>
			{children}
		</div>
	)
}

export default Wrapper
