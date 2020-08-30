import React from 'react';
import './style.css';

const Header = (props) => {
    return (
        <header className="header">
            <nav className="headerMenu">
                <a href="#">Home </a>
                <a href="#">About</a>
                <a href="#">ContactUs</a>
            </nav>
            <div>
                <nav className="headerIcon">
                    <a href="#">
                        <span class="fa-stack">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    <a href="#">
                        <span class="fa-stack">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-instagram fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    <a href="#">
                        <span class="fa-stack">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
