import React from 'react'
import { Avatar } from 'antd'
import { Typography, Checkbox } from 'antd'
const { Title } = Typography

export default function DetailCard(props) {
    console.log(props)
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '0.5px #f8f3f3', height: '20%',width:'100%' }}>
            <div style={{ display: 'flex', width: '50%', justifyContent: 'space-between', alignItems: 'center' }}>
                <Avatar src={props.details.imgUrl} style={{ width: '20%' }} />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '70%' }}>
                    <Title level={5} style={{ marginTop: '14%', marginBotton: '0%' }}><b>{props.details.name}</b></Title>
                    <Title level={5} style={{ marginTop: '0%', marginBotton: '0%' }}>{props.details.designation}</Title>
                </div>
            </div>
            <div style={{ height: '100%', width:'10%',display: 'flex', alignItems: 'center', marginRight: '0%' }}>
                <Checkbox onChange={onChange}/>
            </div>
        </div>
    )
}
