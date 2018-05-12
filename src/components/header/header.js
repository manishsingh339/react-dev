import React from 'react';
import './header.css'

const Header = (props)=> {
    return(
        <header>
            <div className="header-container">
                <div>LOGO</div>
                <div>
                    <input type="text" onChange={props.onKeyWordChange}/>
                </div>
            </div>
        </header>
    );
};

export default Header;