import { FC } from 'react'

import { FormData } from '../../../models/IFormData'

interface TableRowProps {
	itemList: string[] | FormData
}

const TableRow: FC<TableRowProps> = ({ itemList }) => {
	const renderRowItems = (itemList: string[] | FormData) => {
		if (Array.isArray(itemList)) {
			return itemList.map(item => <th key={item} className='px-6 py-4'>{item}</th>)
		} else {
			return Object.entries(itemList).map(item => {
        if (item[0] !== 'id') {
          return <td key={item[0]} className='px-6 py-4'>{item[1]}</td>
        }
      }
			)
		}
	}

	return <tr>{renderRowItems(itemList)}</tr>
}

export default TableRow
