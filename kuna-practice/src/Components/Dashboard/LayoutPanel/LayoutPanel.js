import { BulbOutlined, HomeOutlined, TrophyOutlined, HourglassOutlined, TeamOutlined, TableOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import "./LayoutPanel.css"
import { useNavigate } from 'react-router-dom';

const App = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='layout'>
                <Menu className='panel'
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="light"
                    style={{ backgroundColor: '#6D8C32' }}
                    inlineCollapsed={false}>
                    <Menu.Item key='1' title='Home' style={{ height: '100px', color: 'white' }} onClick={(e)=>navigate('/')}>
                       <div style={{display:'flex',flexDirection:'column'}}>
                         <HomeOutlined className='icon' style={{ fontSize: '25px' }} /><div className='option'>Home</div></div>
                    </Menu.Item>
                    <Menu.Item key='2' title='manageteams' style={{ height: '100px', color: 'white' }} onClick={(e)=>navigate('/manageteams')}>
                       <div style={{display:'flex',flexDirection:'column'}}>
                         <TeamOutlined className='icon' style={{ fontSize: '25px'}} /><div className='option'>Teams</div></div>
                    </Menu.Item>
                    <Menu.Item key='3' title='challenges' style={{ height: '100px', color: 'white' }} onClick={(e)=>navigate('/challenges')}>
                       <div style={{display:'flex',flexDirection:'column'}}>
                         <BulbOutlined className='icon' style={{ fontSize: '25px'}} /><div className='option'>Challenges</div></div>
                    </Menu.Item>
                    <Menu.Item key='4' title='happy hours' style={{ height: '100px', color: 'white' }} onClick={(e)=>navigate('/events')}>
                       <div style={{display:'flex',flexDirection:'column'}}>
                         <HourglassOutlined className='icon' style={{ fontSize: '25px'}} /><div className='option'>Events</div></div>
                    </Menu.Item>
                    <Menu.Item key='5' title='leaderboard' style={{ height: '100px', color: 'white' }} onClick={(e)=>navigate('/leaderboard')}>
                       <div style={{display:'flex',flexDirection:'column'}}>
                         <TableOutlined className='icon' style={{ fontSize: '25px'}} /><div className='option'>Leaderboard</div></div>
                    </Menu.Item>
                    <Menu.Item key='6' title='rewards' style={{ height: '100px', color: 'white' }} onClick={(e)=>navigate('/rewards')}>
                       <div style={{display:'flex',flexDirection:'column'}}>
                         <TrophyOutlined className='icon' style={{ fontSize: '25px'}} /><div className='option'>Rewards</div></div>
                    </Menu.Item>

                    {/* <Menu.Item key='2' title='Challenges' style={{ height: '100px' }} icon={<BulbOutlined style={{ fontSize: '22px' }} />}><h3>Challenges</h3></Menu.Item>
                    <Menu.Item key='3' title='Leaderboard' style={{ height: '100px' }} icon={<TableOutlined style={{ fontSize: '22px' }} />}><h3>Leaderboard</h3></Menu.Item>
                    <Menu.Item key='4' title='Rewards' style={{ height: '100px' }} icon={<TrophyOutlined style={{ fontSize: '22px' }} />}><h3>Rewards</h3></Menu.Item>
                    <Menu.Item key='5' title='Live' style={{ height: '100px' }} icon={<VideoCameraOutlined style={{ fontSize: '22px' }} />}><h3>Live</h3></Menu.Item>
                    <Menu.Item key='6' title='Happy Hours' style={{ height: '100px' }} icon={<HourglassOutlined style={{ fontSize: '22px' }} />}><h3>Happy Hours</h3></Menu.Item> */}
                </Menu>
            </div>
        </>
    );
};
export default App;