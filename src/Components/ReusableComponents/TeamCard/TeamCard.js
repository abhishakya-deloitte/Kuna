import React, { useState } from 'react';
import "./TeamCard.css"
import { Card, Badge } from 'antd';
import { DeleteOutlined, EditFilled } from '@ant-design/icons';
import CricketIcon from '../../../Assets/Images/cricketicon.png'
import { Avatar, Tooltip } from 'antd';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
const { Meta } = Card;

export default function App() {


    //Delete Modal Starts
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };
    //Delete modal ends
    return (
        <div style={{ margin: '2%', width: '100%', height: '80%' }}>
            <div className='teamoptions'>
                <Badge count={1} />
                <div style={{ width: '10%', display: 'flex', justifyContent: 'space-betweem' }}>
                    <EditFilled style={{ marginLeft: '-54%', fontSize: '150%' }} />
                    <DeleteOutlined style={{ marginLeft: '54%', fontSize: '150%' }} onClick={showModal} />
                </div>
            </div>
            <Card
                hoverable
                style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    marginLeft: '1%',
                    borderRadius: '20px',
                    border: '3px solid rgb(229 244 225)'
                }}
                cover={<img alt="example" src="https://www.shutterstock.com/image-vector/modern-professional-typography-cricket-sport-600w-1501919636.jpg"
                    style={{ height: '150px', width: '90%', margin: '5%' }} />}>

                <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '-5%' }}>
                    <Meta title="Delhi Daredevils" description='Team Members' />
                    <div className='options' style={{ display: 'flex', fontSize: '20px' }}>
                        <Badge style={{ backgroundColor: 'black' }} count={'Sports'} />
                        <div style={{ display: 'flex', marginLeft: '9%', marginTop: '2%' }}>
                            <Avatar.Group maxCount={2} maxPopoverTrigger="click" size="medium"
                                maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer', }}>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                                <Tooltip title="Ant User" placement="top">
                                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                </Tooltip>
                                <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                            </Avatar.Group>
                        </div>
                    </div>
                </div>
            </Card>
            <div className='teamoptions' style={{ width: '95%', marginLeft: '1.5%', height: '30px', borderRadius: '0px 0px 10px 10px', color: 'white', backgroundColor: '#6D8C32' }}>
                <img src={CricketIcon} alt='not available' /><div> Cricket </div>
                Team Size 16/20
            </div>
            <Modal
                title="Delete Team"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>Do you want to delete this team?</p>
            </Modal>
        </div>
    )
}
