import React from 'react';
import "./Header.scss";
import Logo from "../../assets/images/Zomato-Logo.png"
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
            <div className="headerContent">
                <img src={Logo} alt="logo_img" />
                <h3>Discover the best Food and Drinks in Amritsar</h3>
                <div className="input">
                    <select name="" id="">
                        <option value="hoshiarpur">Hoshiarpur</option>
                        <option value="mukerian">Mukerian</option>
                        <option value="talwara">Talwara</option>
                        <option value="hajipur">Hajipur</option>
                        <option value="beas">Beas</option>
                    </select>

                    <input type="text" placeholder='Search for restaurant , cuisine , dish' />
                </div>
            </div>
        </div>
    )
};

export default Header;
