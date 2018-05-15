import React, { Component } from 'react';
import './NavBar.css';
import Logo from '../../images/dev-mountain-logo.png'
import { Link } from 'react-router-dom';

class NavBar extends Component {

    render() {
        return (
            <div>
                <div className="navbar-container">
                    <div className="logo-container">
                        <Link to="/"><img className="logo-image" src={Logo} alt="" /></Link>
                    </div>

                    <div className="navbar-links-container">
                        <ul className="navbar-links">
                            <Link to="/">Home</Link>
                            <Link to="/storefront">Store</Link>
                            <Link to="/shoppingcart">Shopping Cart</Link>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default NavBar;