export type PaymentMethod = 'cash' | 'card' | 'transfer' | 'insurance'
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded'

export interface Payment {
  id: string
  visit_id: string
  amount: number
  payment_method: PaymentMethod
  status: PaymentStatus
  created_at: string
  updated_at: string
}

export interface CreatePaymentDto {
  visit_id: string
  amount: number
  payment_method: PaymentMethod
  status: PaymentStatus
}

export type UpdatePaymentDto = Partial<CreatePaymentDto>
