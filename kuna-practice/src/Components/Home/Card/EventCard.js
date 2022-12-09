import React from 'react';
import { Card, Badge } from 'antd';
import { LikeOutlined, SmallDashOutlined } from '@ant-design/icons';
const { Meta } = Card;

const App = () => (
    <Card
        hoverable
        style={{
            width: 440,
            height: 250,
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
        <div style={{display:'flex',marginLeft:'9%',marginTop:'2%'}}>
            <Badge style={{backgroundColor:'black'}} count={'Sports'}/>
            <Badge style={{backgroundColor:'black'}} count={'TeamWork'}/>
        </div>
    </Card>
);
export default App;