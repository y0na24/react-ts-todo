import { FC } from 'react'

interface TableHeadProps {
	headings: string[]
	renderRow: (heading: string[]) => JSX.Element
}

const TableHead: FC<TableHeadProps> = ({ headings, renderRow }) => {
	return (
		<thead className='text-xs bg-grey dark:bg-lightGrey'>
			{renderRow(headings)}
		</thead>
	)
}

export default TableHead
