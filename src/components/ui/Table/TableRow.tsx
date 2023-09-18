import { FC } from 'react'

import { FormData } from '../../../models/IFormData'
import { cn } from '../../../helpers/cn'

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
	itemList: string[] | FormData
	isActive?: boolean
}

const TableRow: FC<TableRowProps> = ({
	itemList,
	className,
	isActive,
	...props
}) => {
	const renderRowItems = (itemList: string[] | FormData) => {
		if (Array.isArray(itemList)) {
			return itemList.map(item => (
				<th key={item} className='px-6 py-4'>
					{item}
				</th>
			))
		} else {
			return Object.entries(itemList).map(item => {
				if (item[0] !== 'id') {
					return (
						<td key={item[0]} className={'px-6 py-3'}>
							{item[1]}
						</td>
					)
				}
			})
		}
	}

	return <tr className={cn({
		'bg-secondary': isActive
	})} {...props}>{renderRowItems(itemList)}</tr>
}

export default TableRow
