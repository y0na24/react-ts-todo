export interface FormData {
  name: string
  age: string | number
  option: string
  isEmployed: boolean | EmployedStatus
  id: number | null
}

type EmployedStatus = 'Employed' | 'Not Employed'