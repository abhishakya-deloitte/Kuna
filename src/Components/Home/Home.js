import React from 'react'
import "./Home.css"
import Card from '../ReusableComponents/Card/Card';
import StatsCard from '../ReusableComponents/StatsCard/StatsCard';
import EventCard from '../ReusableComponents/EventCard/EventCard'
import Carousel from "../ReusableComponents/Carousel/Carousel"
import { Typography } from 'antd';
const { Title } = Typography

export default function Home() {
  return (
    <div className='homepage'>
      <div className='firstRow'>
        <div className='quotes'>
          <h1>Unlock Your Inner Zen</h1>
          <h1><u>Join our Community</u></h1>
        </div>
        <div className='carousel'>
          <Carousel/> 
        </div>
      </div>
      <div className='personalStats'>
        <Title level={2} style={{ display: 'flex', marginLeft: '4%',marginBottom:'1%' }}>Personal Stats</Title>
        <div className='personalStatsCards' style={{marginLeft:'4%'}}>
          <StatsCard />
          <StatsCard />
          <StatsCard />
        </div>
      </div>
      <div className='events'>
        <Title level={2} style={{ display: 'flex', marginLeft: '4%',marginTop:'1%',marginBottom:'1%' }}>Events</Title>
        <div className='eventsList' style={{marginLeft:'3%'}}>
            <EventCard/>
            <EventCard/>
            <EventCard/>
        </div>
      </div>
      <div className='wallofFame'>
        <Title level={2} style={{ display: 'flex', marginLeft: '4%',marginTop:'2%'}}>Wall of Fame</Title>
        <div className='wallofFameList' style={{marginLeft:'3%'}}>
          <Card details={{class:'Sports',category:'Running'}} />
          <Card details={{class:'Sports',category:'Running'}} />
        </div>
      </div>
    </div>
  )
}
