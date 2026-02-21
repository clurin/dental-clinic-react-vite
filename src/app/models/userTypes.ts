export type UserRole = 'admin' | 'doctor' | 'assistant'

export interface User {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  password_hash: string
  role: UserRole
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface CreateUserDto {
  first_name: string
  last_name: string
  email: string
  phone: string | null
  password: string
  role: UserRole
}

export interface UpdateUserDto {
  first_name?: string
  last_name?: string
  email?: string
  phone?: string | null
  role?: UserRole
  is_active?: boolean
  password?: string
}
