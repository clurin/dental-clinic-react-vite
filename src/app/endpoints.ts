const ENDPOINTS = {
  USERS: '/users',
  PATIENTS: '/patients',
  VISITS: '/visits',
  SERVICES: '/services',
  PAYMENTS: '/payments',
  VISIT_SERVICES: '/visit_service',
} as const

export const withId = (basePath: string, id: string) => `${basePath}/${id}`

export default ENDPOINTS
