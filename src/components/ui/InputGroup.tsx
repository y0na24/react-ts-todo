import { FC, ReactNode } from 'react'

interface InputGroupProps {
	children: ReactNode
}

const InputGroup: FC<InputGroupProps> = ({ children }) => {
	return <div className='flex items-center'>{children}</div>
}

export default InputGroup
