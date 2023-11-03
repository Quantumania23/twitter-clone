import React from "react";
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import SidebarOption from "./SidebarOption";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import PermIdentityIcon from "@mui/icons-material/PermIdentity"
import ListAltIcon from "@mui/icons-material/ListAlt"
import { Button } from "@mui/material/core";



function Sidebar () {
    return (
        <div className="sidebar">
            {/* Twitter icon */}
            <TwitterIcon className="sidebar__twitterIcon"/>

            <SidebarOption active Icon={HomeIcon} text={'Home'}/>
            <SidebarOption Icon={SearchIcon} text={'Explore'}/>
            <SidebarOption Icon={NotificationsNoneIcon} text={'Notifications'}/>
            <SidebarOption Icon={MailOutlineIcon} text={'Messages'}/>
            <SidebarOption Icon={BookmarkBorderIcon} text={'Bookmarks'}/>
            <SidebarOption Icon={ListAltIcon} text={'Lists'}/>
            <SidebarOption Icon={PermIdentityIcon} text={'Profile'}/>
            <SidebarOption Icon={MoreHorizIcon} text={'More'}/>
            {/* SidebarOption */} 
            <TagIcon/>     
        
            {/* Button => Tweet */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    ) 
}

export default Sidebar;