import { FC, useState } from 'react'

import Form from './Form'
import Wrapper from './ui/Wrapper'
import TableHead from './ui/Table/TableHead'
import TableRow from './ui/Table/TableRow'
import TableBody from './ui/Table/TableBody'
import Table from './ui/Table/Table'

import { useUsers } from '../hooks/useUsers'

const headings = ['Name', 'Age', 'Subscription', 'Employment']

const ToDoList: FC = () => {
	const { users, activeId, setActiveId } = useUsers()

	console.log(users)

	return (
		<div className='flex gap-10 bg-primary px-10 py-3 rounded-md h-[750px] dark:bg-white dark:text-primary'>
			<Form />
			<Wrapper className='basis-[70%] max-h-[550px] overflow-auto'>
				<Table
					renderHead={() => (
						<TableHead
							headings={headings}
							renderRow={headings => <TableRow itemList={headings} />}
						/>
					)}
					renderBody={() => (
						<TableBody
							usersList={users}
							renderRow={user => (
								<TableRow
									onClick={() => setActiveId(user.id as number)}
									isActive={activeId === user.id}
									key={user.id}
									itemList={user}
								/>
							)}
						/>
					)}
				/>
			</Wrapper>
		</div>
	)
}

export default ToDoList
