import React from 'react';
import { Card, Badge } from 'antd';
import "./TeamCard.css"
const { Meta } = Card;

const App = () => (
    <div style={{ margin: '2%', }}>
        <div className='teamoptions' style={{ }}>
            <Badge count={1}/>
        </div>
        <Card
            hoverable
            style={{
                width: 440,
                height: 300,
                boxSizing: 'border-box',
                marginLeft: '2%',
                borderRadius: '20px',
                border: '3px solid rgb(229 244 225)'
            }}
            cover={<img alt="example" src="https://www.shutterstock.com/image-vector/modern-professional-typography-cricket-sport-600w-1501919636.jpg" style={{ height: '150px', width: '90%', margin: '4%' }} />}>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '-5%' }}>
                <Meta title="Delhi Daredevils" description='Team Members' />
                <div className='options' style={{ display: 'flex', fontSize: '20px', marginLeft: '20%' }}>
                    <Badge style={{ backgroundColor: 'black' }} count={'Sports'} />
                </div>
            </div>
            <div style={{ display: 'flex', marginLeft: '9%', marginTop: '2%' }}>
            </div>
        </Card>
        <div className='teamoptions' style={{ width: '440px', height: '30px', backgroundColor:'#f5f5f5',borderRadius: '0px 0px 10px 10px', marginBottom: '1%', marginLeft:'2%'}}>
            
        </div>
    </div>
);
export default App;