import { FC } from 'react'

import { FormData } from '../../../models/IFormData'

interface TableBodyProps {
  usersList: FormData[] 
  renderRow: (user: FormData) => JSX.Element
}

const TableBody: FC<TableBodyProps> = ({usersList, renderRow}) => {
  return (
    <tbody>
      {usersList.map(user => (
        renderRow(user)
      ))}
    </tbody>
  )
}

export default TableBody;