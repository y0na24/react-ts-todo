import { ReactNode, createContext, useContext, FC, useState } from 'react'
import { FormData } from '../models/IFormData'

interface UsersProviderProps {
	children: ReactNode
}

interface UsersContextInitialState {
	users: FormData[] | []
	addUser: (data: FormData) => void
	deleteUser: (id: number) => void
}

const UsersContext = createContext<UsersContextInitialState>({
	users: [],
	addUser: () => {},
	deleteUser: () => {},
})

export const useUsers: () => UsersContextInitialState = () => {
	return useContext(UsersContext)
}

export const UsersProvider: FC<UsersProviderProps> = ({ children }) => {
	const [users, setUsers] = useState<FormData[]>([
		{
			name: 'Matvey',
			age: 20,
			id: null,
			isEmployed: false,
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
	}

	return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
}
