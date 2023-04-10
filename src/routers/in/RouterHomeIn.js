import React from 'react'
import ScrollToTop from '../../hooks/ScrollToTop'
import { Routes,Route } from 'react-router-dom'
import Profile from '../../views/profile/Profile'

const RouterHomeIn = () => {
  return (
    <div>
        <ScrollToTop />
        <Routes>
            <Route path='/*' element={<Profile />} />
        </Routes>
    </div>
  )
}

export default RouterHomeIn