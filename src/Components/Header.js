import { AppBar,  Toolbar, Typography } from '@mui/material'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <Typography>LINK UR CODES</Typography>
                        <Link to="/"><Typography>ADD COURSE</Typography></Link>
                        <Link to="/Viewcourse"><Typography>VIEW COURSE</Typography></Link>
                
                    
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
