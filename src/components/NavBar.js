import React from 'react';
import { HiOutlineViewGrid } from 'react-icons/hi';
import { HiOutlineMenu } from 'react-icons/hi';
import { GiSkills } from 'react-icons/gi';
// import { FaClipboardList } from 'react-icons/fa';
import { RiHomeHeartFill } from 'react-icons/ri';
import { FaHammer } from 'react-icons/fa';

function NavBar() {

    return (
         <div className='nav-bar'>
        <i className='view-grid'><HiOutlineMenu /></i>

        {/* <i className='nav-bar-home'><RiHomeHeartFill /></i> */}
        {/* <span className="nav-bar-subtitles">Home</span> */}
        {/* <i className='nav-bar-skills'><GiSkills /></i> */}
        {/* <span className="nav-bar-subtitles">Skills</span> */}
        {/* <i className='nav-bar-projects'><FaHammer /></i> */}
        {/* <span className="nav-bar-subtitles">Projects</span> */}
        </div>
    )
}

export default NavBar;