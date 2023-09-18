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

const intialUsers: FormData[] = JSON.parse(localStorage.getItem('users')!) || []

const UsersContext = createContext<UsersContextInitialState>({
	users: intialUsers,
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
	const [users, setUsers] = useState<FormData[]>(intialUsers)

	const addUser = (data: FormData) => {
		const newUsers = [...users, data]
		setUsers(newUsers)
		localStorage.setItem('users', JSON.stringify(newUsers))
	}

	const deleteUser = (id: number) => {
		const filteredUsers = users.filter(user => user.id !== id)

		setUsers(filteredUsers)

		if (filteredUsers.length > 0) {
			localStorage.setItem('users', JSON.stringify(filteredUsers))
		} else {
			localStorage.removeItem('users')
		}
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
