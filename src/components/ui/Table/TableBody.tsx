import { FC } from 'react'

interface TableBodyProps {
  usersList: any 
  renderRow: (users) => JSX.Element
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