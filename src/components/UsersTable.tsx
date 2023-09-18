import { FC } from 'react'

import Wrapper from './ui/Wrapper'
import TableHead from './ui/Table/TableHead'
import TableRow from './ui/Table/TableRow'
import TableBody from './ui/Table/TableBody'
import Table from './ui/Table/Table'

import { useUsers } from '../hooks/useUsers'

const headings = ['Name', 'Age', 'Subscription', 'Employment']

const UsersTable: FC = () => {
	const { users, activeId, setActiveId } = useUsers()

	return (
		<Wrapper className='md:basis-[70%] max-h-[550px] overflow-y-auto scroll p-0'>
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
	)
}

export default UsersTable
