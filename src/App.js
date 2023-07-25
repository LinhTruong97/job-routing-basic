import React from 'react'
import TopNavigationBar from './components/TopNavigationBar'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import { Route, Routes } from 'react-router-dom'




function App() {
    return (
        <div>
            <TopNavigationBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/job/:id" element={<DetailPage />} />
            </Routes>
        </div>
    )
}

export default App
