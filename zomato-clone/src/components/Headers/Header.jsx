import React from 'react';
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
        <nav>
            <span>Get The App</span>
            <div className="right">
                <span>Investor Relations</span>
                <span>Add Restaurent</span>
                <span>Log In</span>
                <span>Sign In</span>
            </div>
        </nav>
    </div>
  )
};

export default Header;
