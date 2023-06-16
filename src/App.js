import React from 'react'
import HomePage from './Pages/HomePage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import DetailsPage from './Pages/DetailsPage'
import Signup from './Pages/Signup'
import { ToastContainer } from 'react-toastify'
import NotFound from './Pages/NotFound'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />}/>
        <Route path='/Home' element={<HomePage />}/>
        <Route path='/BlogDetails/:id' element={<DetailsPage />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      </BrowserRouter>

      
      <ToastContainer />
    </div>
  )
}

export default App