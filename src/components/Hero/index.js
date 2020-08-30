import React from 'react';
import './style.css';
import Card from '../UI/Card';
import Logo from '../Logo';
import Navbar from '../Navbar';

const Hero = (props) => {
    return (
        <div className="hero">
            Hero
            <Card>
                <div style={{ padding: '50px 0'}}>
                    <Logo></Logo>
                </div>
                <Navbar></Navbar>
            </Card>
        </div>
    );
}

export default Hero;
