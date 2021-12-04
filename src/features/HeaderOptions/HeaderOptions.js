import React from 'react'
import './HeaderOptions.css'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from '../User/userSlice'

function HeaderOptions({avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser);
    
    if(user){
        return (
            <div onClick={onClick} className="headerOption">
                {Icon && <Icon className="headerOption_icon"/>}
                {avatar && (
                    <Avatar className='headerOption_icon' src={user?.photoUrl} >{user.displayName[0]}</Avatar>
                )}
                <h3 className="headerOption_title">{title}</h3>
            </div>
        )
    }
    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption_icon"/>}
            {avatar && (
                <Avatar className='headerOption_icon' src={user?.photoUrl} ></Avatar>
            )}
            <h3 className="headerOption_title">{title}</h3>
        </div>
    )
}

export default HeaderOptions
