import React from 'react'
import "./Dashboard.css"
import LayoutPanel from './LayoutPanel/LayoutPanel'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Teams from '../Teams/Teams'
import Challenges from '../Challenges/Challenges'
import Rewards from '../Rewards/Rewards'
import Live from '../Events/Events'
import Leaderboard from '../Leaderboard/Leaderboard'
import Navbar from './Header/Navbar'
import CreateTeam from '../Teams/CreateTeam/CreateTeam'
import CategoryCRUD from '../CategoryCRUD/CategoryCRUD'

export default function Dashboard() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <div className="dashboard-contents">
          <LayoutPanel />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/manageteams' element={<Teams/>}/>
            <Route path='/manageteams/createteam' element={<CreateTeam/>}/>
            <Route path='/challenges' element={<Challenges/>}/>
            <Route path='/rewards' element={<Rewards />} />
            <Route path='/events' element={<Live />} />
            <Route path='/leaderboard' element={<Leaderboard />} />
            <Route path='/getcategory' element={<CategoryCRUD/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
