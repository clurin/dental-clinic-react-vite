import { api } from './api'
import ENDPOINTS, { withId } from './endpoints'
import type { CreatePaymentDto, Payment, UpdatePaymentDto } from './models/paymentTypes'

export const paymentApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPayments: build.query<Payment[], void>({
      query: () => ENDPOINTS.PAYMENTS,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Payment' as const, id })), { type: 'Payment' as const, id: 'LIST' }]
          : [{ type: 'Payment' as const, id: 'LIST' }],
    }),
    getPaymentById: build.query<Payment, string>({
      query: (id) => withId(ENDPOINTS.PAYMENTS, id),
      providesTags: (_result, _error, id) => [{ type: 'Payment', id }],
    }),
    createPayment: build.mutation<Payment, CreatePaymentDto>({
      query: (body) => ({
        url: ENDPOINTS.PAYMENTS,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Payment', id: 'LIST' }],
    }),
    updatePayment: build.mutation<Payment, { id: string; data: UpdatePaymentDto }>({
      query: ({ id, data }) => ({
        url: withId(ENDPOINTS.PAYMENTS, id),
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Payment', id }, { type: 'Payment', id: 'LIST' }],
    }),
    deletePayment: build.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: withId(ENDPOINTS.PAYMENTS, id),
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Payment', id }, { type: 'Payment', id: 'LIST' }],
    }),
  }),
})

export const {
  useGetPaymentsQuery,
  useGetPaymentByIdQuery,
  useCreatePaymentMutation,
  useUpdatePaymentMutation,
  useDeletePaymentMutation,
} = paymentApi
