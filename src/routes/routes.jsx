import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes
