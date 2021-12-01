import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import CompanyLogo from '../../images/linkedin.png';
import HeaderOptions from '../HeaderOptions/HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import profilePic from '../../images/v0caqchbtn741.jpg';

function Header() {
    return (
        <div className="header">
            {/* Company Logo */}
            <div className="header_left">
                <img src={CompanyLogo} alt=""/>

                {/* Search Bar*/}
                <div className="header_search">
                    <SearchIcon/>
                    <input type="text"/>
                </div>
            </div>

            {/*Header Options*/}
            <div className="header_right">
                <HeaderOptions Icon={HomeIcon} title="Home"/>
                <HeaderOptions Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOptions Icon={ChatIcon} title="Messaging"/>
                <HeaderOptions Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOptions avatar={profilePic} title="me"/>
            </div>
        </div>
    )
}

export default Header
