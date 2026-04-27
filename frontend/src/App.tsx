import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ThemeProvider } from './contexts/ThemeContext'
import { BaggagePage } from './pages/BaggagePage'
import { FlightPage } from './pages/FlightPage'
import { HomePage } from './pages/HomePage'
import { ParkingPage } from './pages/ParkingPage'
import { TransportPage } from './pages/TransportPage'

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="flight" element={<FlightPage />} />
          <Route path="transport" element={<TransportPage />} />
          <Route path="parking" element={<ParkingPage />} />
          <Route path="baggage" element={<BaggagePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}
