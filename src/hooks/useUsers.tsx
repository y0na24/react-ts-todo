import { ReactNode, createContext, useContext, FC, useState } from 'react'
import { FormData } from '../models/IFormData'

interface UsersProviderProps {
	children: ReactNode
}

interface UsersContextInitialState {
	users: FormData[] | []
	addUser: (data: FormData) => void
	deleteUser: (id: number) => void
	setActiveId: (id: number | null) => void
	activeId: number | null
}

const UsersContext = createContext<UsersContextInitialState>({
	users: [],
	addUser: () => {},
	deleteUser: () => {},
	setActiveId: () => {},
	activeId: null,
})

export const useUsers: () => UsersContextInitialState = () => {
	return useContext(UsersContext)
}

export const UsersProvider: FC<UsersProviderProps> = ({ children }) => {
	const [activeId, setActiveId] = useState<number | null>(null)
	const [users, setUsers] = useState<FormData[]>([
		{
			name: 'Matvey',
			age: 20,
			id: 333,
			isEmployed: 'Employed',
			option: 'Subscribed',
		},
		{
			name: 'Matvey',
			age: 20,
			id: 222,
			isEmployed: 'Not Employed',
			option: 'Subscribed',
		},
	])

	const addUser = (data: FormData) => {
		setUsers(prev => [...prev, data])
	}

	const deleteUser = (id: number) => {
		const filteredUsers = users.filter(user => user.id !== id)

		setUsers(filteredUsers)
	}

	const value = {
		users,
		addUser,
		deleteUser,
		activeId,
		setActiveId,
	}

	return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
}
