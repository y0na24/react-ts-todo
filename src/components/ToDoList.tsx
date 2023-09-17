import { FC } from 'react'
import Form from './Form'
import Wrapper from './ui/Wrapper'
import { useUsers } from '../hooks/useUsers'

const ToDoList: FC = () => {
	const {users} = useUsers()

	return (
		<div className='flex gap-10 bg-primary px-6 py-3 rounded-md w-[1024px] h-[750px] dark:bg-white dark:text-primary'>
			<Form />
			<Wrapper className='basis-[70%]'>
				{users.map(user => (
					<div>{user.name}</div>
				))}
			</Wrapper>
		</div>
	)
}

export default ToDoList
