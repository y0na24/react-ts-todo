import { FC, ReactNode } from 'react'

interface WrapperProps {
	children: ReactNode
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
	return (
		<div className='flex flex-col gap-3 rounded-sm max-w-[35%] p-2 border-grey border'>
			{children}
		</div>
	)
}

export default Wrapper
