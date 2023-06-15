import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
        <div className="header_left">
            <IconButton>
                <MenuIcon />
            </IconButton>
                <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt="Gmail logo" />
        </div>

        <div className="header_middle">
            <SearchIcon/>
            <input type="text" placeholder='Search Email'/>
            <ArrowDropDownIcon className='header_inputCAret'/>


        </div>

        <div className="header_right">
            <IconButton>
                <AppsIcon/>
            </IconButton>

            <IconButton>
                <NotificationsIcon/>
            </IconButton>

            <Avatar />
        </div>
    </div>
  )
}

export default Header 