import React from 'react'
import { Typography } from 'antd';
import Card from "../Home/Card/Card"
const { Title } = Typography

export default function Challenges() {
  return (
    <div>
      <Title>Activities</Title>
      <div className='sports' style={{display:'flex'}}>
      <Card/>
      <Card/>
      <Card/>

      </div>
      <div className='fun' style={{display:'flex'}}>
        <Card/>
      </div>
    </div>
  )
}
