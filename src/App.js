import { Route, Routes, Navigate } from 'react-router-dom'
import { Projects } from './pages/Projects/Projects'
import { AboutCompany } from './pages/AboutCompany/AboutCompany'
import { Contacts } from './pages/Contacts/Contacts'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import 'react-toastify/dist/ReactToastify.css';
import './App.scss'

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/company' element={<AboutCompany />} />
        <Route exact path='/contacts' element={<Contacts />} />
        <Route path="/" element={<Navigate to="/contacts" />} />
      </Routes>
      <Footer />
    </>

  )
}

