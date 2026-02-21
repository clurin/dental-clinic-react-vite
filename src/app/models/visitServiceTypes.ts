export interface VisitService {
  id: string
  visit_id: string
  service_id: string
  quantity: number
  price_at_time: number
  created_at: string
  updated_at: string
}

export interface CreateVisitServiceDto {
  visit_id: string
  service_id: string
  quantity: number
  price_at_time: number
}

export type UpdateVisitServiceDto = Partial<CreateVisitServiceDto>
