import React,{useState} from 'react'
import { Typography } from 'antd';
import Card from "../ReusableComponents/Card/Card"
import { CaretDownOutlined, CaretUpFilled } from '@ant-design/icons';
const { Title } = Typography

export default function Challenges() {
  const [sort,setSort] = useState('Increasing')

  const handleSort = () => {
      if(sort==='increasing'){
        setSort('decreasing')
      }else{
        setSort('increasing')
      }
  }

  return (
    <div style={{ marginLeft: '5%' }}>
      <div style={{display:'flex',justifyContent:'space-between',width:'95%'}}>
        <Title style={{ display: 'flex' }}>Activities</Title>
       <div onClick={handleSort} style={{marginTop:'4%',fontSize:'150%'}}>{sort==='increasing'? <CaretDownOutlined />:<CaretUpFilled/>} Sort</div> 
      </div>
      <div style={{marginTop:'2%'}}>
        <div className='sports' style={{ display: 'flex' }}>
          <Card details={{ class: 'Sports', category: 'Running' }} />
          <Card details={{ class: 'Sports', category: 'Running' }} />
          <Card details={{ class: 'Sports', category: 'Running' }} />
        </div>
        <div className='fun' style={{ display: 'flex', marginTop: '5%' }}>
          <Card details={{ class: 'Tech', category: 'Quiz' }} />
          <Card details={{ class: 'Tech', category: 'Quiz' }} />
          <Card details={{ class: 'Tech', category: 'Quiz' }} />
        </div>
        <div style={{ display: 'flex', marginTop: '5%' }}>
          <Card details={{ class: 'Fun', category: 'Dancing' }} />
          <Card details={{ class: 'Fun', category: 'Dancing' }} />
          <Card details={{ class: 'Fun', category: 'Dancing' }} />
        </div>
      </div>
    </div>
  )
}
