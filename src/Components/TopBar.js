import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class TopBar extends Component {
    render() {
        return (
            <div className="topbar">
            <div className="topbarwrapper">
                <div className="topLeft">
                    <Link className="link"to ="/">
                    <span className="logo admin">
                        AdMIN
                    </span></Link>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
 
                        <span className="top-icon-bag">
                            2
                        </span>
                    </div>
                    <div className="topbarIconContainer">
 
                        <span className="top-icon-bag">
                            2
                        </span>
                    </div>
                    <div className="topbarIconContainer">
                        Settings
                    </div>
                    <img src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1393&q=80" alt="" className="topAvatar"/>
                    
                </div>
            </div>
         </div>
        )
    }
}
