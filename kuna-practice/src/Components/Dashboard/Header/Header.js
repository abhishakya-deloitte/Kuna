import { Avatar } from 'antd'
import React from 'react'
import { AlertOutlined } from '@ant-design/icons'
import "./Header.css"

export default function Header() {
    return (
        <div className='headerclass'>
            <h2>Kunakidza</h2>
            <div>
                <AlertOutlined style={{ fontSize: '40px' }} />
                <Avatar className='usericon' src="https://cdn-icons-png.flaticon.com/512/149/149071.png"></Avatar>
            </div>
        </div>
    )
}
