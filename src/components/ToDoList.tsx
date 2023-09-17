import { FC } from 'react'

import Form from './Form'
import Wrapper from './ui/Wrapper'
import { useUsers } from '../hooks/useUsers'
import TableHead from './ui/Table/TableHead'
import TableRow from './ui/Table/TableRow'
import TableBody from './ui/Table/TableBody'

const headings = ['Name', 'Age', 'Subscription', 'Employment']

const ToDoList: FC = () => {
	const { users } = useUsers()

	console.log(users)

	return (
		<div className='flex gap-10 bg-primary px-10 py-3 rounded-md h-[750px] dark:bg-white dark:text-primary'>
			<Form />
			<Wrapper className='basis-[70%]'>
				<table className='w-full text-sm text-left'>
					<TableHead
						headings={headings}
						renderRow={headings => <TableRow itemList={headings} />}
					/>
					<TableBody usersList={users} renderRow={users => <TableRow itemList={users}/>} />
					<tbody>
						<tr>
							<td className='px-6 py-4 font-medium'>Apple MacBook Pro 17"</td>
							<td className='px-6 py-4'>Silver</td>
							<td className='px-6 py-4'>Laptop</td>
							<td className='px-6 py-4'>$2999</td>
						</tr>
						<tr>
							<td className='px-6 py-4 font-medium'>Microsoft Surface Pro</td>
							<td className='px-6 py-4'>White</td>
							<td className='px-6 py-4'>Laptop PC</td>
							<td className='px-6 py-4'>$1999</td>
						</tr>
						<tr>
							<td className='px-6 py-4 font-medium'>Magic Mouse 2</td>
							<td className='px-6 py-4'>Black</td>
							<td className='px-6 py-4'>Accessories</td>
							<td className='px-6 py-4'>$99</td>
						</tr>
					</tbody>
				</table>
			</Wrapper>
		</div>
	)
}

export default ToDoList
