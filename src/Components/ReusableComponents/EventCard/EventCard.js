import React from 'react';
import { Card, Badge } from 'antd';
import { LikeOutlined, SmallDashOutlined } from '@ant-design/icons';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Tooltip } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography
const { Meta } = Card;

const App = () => (
    <Card
        hoverable
        style={{
            width: '22rem',
            height: '18rem',
            boxSizing: 'border-box',
            marginLeft: '2%',
            borderRadius: '20px',
            border: '3px solid rgb(229 244 225)'
        }}
        cover={<img alt="example" src="https://www.shutterstock.com/image-vector/modern-professional-typography-cricket-sport-600w-1501919636.jpg" style={{ height: '150px', width: '90%', margin: '4%' }} />}>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '-5%' }}>
            <Meta title="HBCL Cricket League" />
            <div className='options' style={{ display: 'flex', fontSize: '20px', marginLeft: '20%' }}>
                <LikeOutlined style={{}} /><SmallDashOutlined style={{ marginLeft: '10px' }} />
            </div>
        </div>
        <div style={{ display: 'flex', marginLeft: '3%', marginTop: '2%' }}>
            <Badge style={{ backgroundColor: 'black' }} count={'Sports'} />
            <Badge style={{ backgroundColor: 'black' }} count={'TeamWork'} />
        </div>
            <div style={{ marginLeft: '2rem',marginTop:'0.5rem',display:'flex'}}>
                <Avatar.Group maxCount={2} maxPopoverTrigger="click" size="medium"
                    maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer', }}>
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                    <Tooltip title="Ant User" placement="top">
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    </Tooltip>
                    <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                </Avatar.Group>
                <Title></Title>
            </div>
    </Card>
);
export default App;