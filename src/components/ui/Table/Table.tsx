import { FC } from 'react'

interface TableProps {
  renderHead: () => JSX.Element
}

const Table: FC<TableProps> = ({renderHead}) => {
	return <table className='w-full text-sm text-left'>
    {renderHead()}
  </table>
}

export default Table
