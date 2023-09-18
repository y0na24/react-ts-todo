import { FC } from 'react'

import Form from './Form'
import UsersTable from './UsersTable'

const ToDoList: FC = () => {
	return (
		<div className='flex flex-col md:flex-row gap-10 bg-primary px-10 py-3 rounded-md h-[750px] dark:bg-white dark:text-primary'>
			<Form />
			<UsersTable />
		</div>
	)
}

export default ToDoList
