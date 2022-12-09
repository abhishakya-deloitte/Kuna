import React from 'react'
import "./Dashboard.css"
import LayoutPanel from './LayoutPanel/LayoutPanel'
import Header from './Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Teams from '../Teams/Teams'
import Challenges from '../Challenges/Challenges'
import Rewards from '../Rewards/Rewards'
import Live from '../Live/Live'
import HappyHours from '../HappyHours/HappyHours'

export default function Dashboard() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="dashboard-contents">
          <LayoutPanel />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/manageteams' element={<Teams/>}/>
            <Route path='/challenges' element={<Challenges/>}/>
            <Route path='/rewards' element={<Rewards />} />
            <Route path='/live' element={<Live />} />
            <Route path='/happyhours' element={<HappyHours />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
