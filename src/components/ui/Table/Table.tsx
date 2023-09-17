import { FC } from 'react'

interface TableProps {
  renderHead: () => JSX.Element
  renderBody: () => JSX.Element
}

const Table: FC<TableProps> = ({renderHead, renderBody}) => {
	return <table className='w-full text-sm text-left'>
    {renderHead()}
    {renderBody()}
  </table>
}

export default Table
