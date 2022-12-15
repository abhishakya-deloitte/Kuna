import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Teams.css'
import { Typography } from 'antd'
import { Steps,Button } from 'antd';
import TeamCard from '../ReusableComponents/TeamCard/TeamCard'
const { Step } = Steps;
const { Title } = Typography;

export default function Teams() {
  const navigate = useNavigate()

  const createTeam = () => {
    navigate('./createteam')
  }
  return (
    <div className='manageTeams'>
      <div className='manageTeamsTitle'>
        <Title>Manage Teams</Title>
      </div>
      <div className='teamsTabs'>
        <div>
        <Steps current={1}>
          <Step title="Home" status='process'/>
          <Step title="Manage Teams and" status='process'/>
          <Step title="My Teams " status='wait' />
        </Steps>
        </div>
        <Button size={'large'} onClick={createTeam} style={{backgroundColor:'#6D8C32',width:'10rem',color:'white',height:'3rem'}}>Create Team</Button>
      </div>
      <div className='teamsList' style={{display:'flex',marginTop:'5%',width:'100%'}}>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
      </div>
    </div>
  )
}
