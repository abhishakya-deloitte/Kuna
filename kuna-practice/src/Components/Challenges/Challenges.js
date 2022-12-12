import React from 'react'
import { Typography } from 'antd';
import Card from "../ReusableComponents/Card/Card"
const { Title } = Typography

export default function Challenges() {
  return (
    <div>
      <Title>Activities</Title>
      <div className='sports' style={{ display: 'flex' }}>
        <Card details={{class:'Sports',category:'Running'}}/>
        <Card details={{class:'Sports',category:'Running'}}/>
        <Card details={{class:'Sports',category:'Running'}}/>
      </div>
      <div className='fun' style={{ display: 'flex', marginTop: '5%' }}>
        <Card details={{class:'Tech',category:'Quiz'}}/>
        <Card details={{class:'Tech',category:'Quiz'}}/>
        <Card details={{class:'Tech',category:'Quiz'}}/>
      </div>
      <div style={{ display: 'flex', marginTop: '5%' }}>
        <Card details={{class:'Fun',category:'Dancing'}}/>
        <Card details={{class:'Fun',category:'Dancing'}}/>
        <Card details={{class:'Fun',category:'Dancing'}}/>
      </div>
    </div>
  )
}
