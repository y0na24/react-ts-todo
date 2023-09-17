import { FC } from 'react'
import Form from './Form'

const ToDoList: FC = () => {
	return (
		<div className='bg-primary px-6 py-3 rounded-md w-[1024px] h-[750px] dark:bg-white dark:text-primary'>
			<Form />
		</div>
	)
}

export default ToDoList
