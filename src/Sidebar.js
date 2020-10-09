import React from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>sidebar</h2>
            <div className="sidebar__top">
                <h3>test room</h3>
                <ExpandMoreIcon />
            </div>
        </div>
    )
}

export default Sidebar
