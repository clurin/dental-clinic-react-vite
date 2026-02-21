export interface Service {
  id: string
  name: string
  description: string | null
  code: string | null
  price: number
  duration: number
  created_at: string
  updated_at: string
}

export interface CreateServiceDto {
  name: string
  description: string | null
  code: string | null
  price: number
  duration: number
}

export type UpdateServiceDto = Partial<CreateServiceDto>
