import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Quote from './pages/Quote'
import DomesticFamilyCare from './pages/DomesticFamilyCare'
import ProcurementCatering from './pages/ProcurementCatering'
import FacilityMaintenance from './pages/FacilityMaintenance'
import RealEstateLogistics from './pages/RealEstateLogistics'
import ComingSoon from './pages/ComingSoon'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/contact" element={<Navigate to="/quote" replace />} />
          <Route path="/services" element={<Navigate to="/services/domestic-family-care" replace />} />
          <Route path="/services/domestic-family-care" element={<DomesticFamilyCare />} />
          <Route path="/services/procurement-catering" element={<ProcurementCatering />} />
          <Route path="/services/facility-maintenance" element={<FacilityMaintenance />} />
          <Route path="/services/real-estate-logistics" element={<RealEstateLogistics />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
