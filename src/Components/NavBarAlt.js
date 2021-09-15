import React from 'react'
import StockReport from './stockReport';

function NavBarAlt() {
    return (
        <div className="NavBar">
            <h1 className="the-journal">The News Journal</h1>
            <StockReport/>
            <ul className="links-container">
    <li className="link-item"><a href="#" className="link">home</a></li>
    <li className="link-item"><a href="#" className="link">general</a></li>
    <li className="link-item"><a href="#" className="link">entertainment</a></li>
    <li className="link-item"><a href="#" className="link">Technology</a></li>
    <li className="link-item"><a href="#" className="link">Sports</a></li>
    <li className="link-item"><a href="#" className="link">Health</a></li>
    <li className="link-item"><a href="#" className="link">Science</a></li>


</ul>
        </div>
    )
}

export default NavBarAlt;
