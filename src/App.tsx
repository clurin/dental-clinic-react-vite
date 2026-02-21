import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import SideBarMenu from './components/SideBarMenu/SideBarMenu'
import TopInfoBar from './components/TopInfoBar/TopInfoBar'
import VisitsPage from './pages/VisitsPage'

const OverviewPage = lazy(() => import('./pages/OverviewPage'))
const PatientsPage = lazy(() => import('./pages/PatientsPage'))
const ServicePage = lazy(() => import('./pages/ServicesPage'))
const PaymentsPage = lazy(() => import('./pages/PaymentsPage'))
const StaffPage = lazy(() => import('./pages/StaffPage'))

function App() {
  const location = useLocation()
  const currentPath = location.pathname.replace('/', '') || 'overview'

  return (
    <div>
        <div className="fixed left-0 top-0 w-full h-20 flex">
        <SideBarMenu />
        <TopInfoBar name={currentPath} />
      </div>

      <div className="ml-84 mt-30 mr-2">
        <Suspense fallback={<div className="p-4">Загрузка страницы...</div>}>
          <Routes>
            <Route path="/" element={<Navigate to="/overview" replace />} />
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/patients" element={<PatientsPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/payments" element={<PaymentsPage />} />
            <Route path="/staff" element={<StaffPage />} />
            <Route path="/visits" element={<VisitsPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

export default App
