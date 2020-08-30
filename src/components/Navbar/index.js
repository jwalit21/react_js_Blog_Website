import React,{useState} from 'react';
import './style.css';
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {

    const submitSearch = (e) => {
        e.preventDefault();
        alert("searched");
    }

    const [search, setSearch] = useState(false);

    const openSearch = () => {
        setSearch(true);
    }

    const searchIconClass = search ? "searchInput active" : "searchIcon";

    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about-us">About Us</NavLink></li>
                <li><NavLink to="/post">Posts</NavLink></li>
                <li><NavLink to="/contact-us">Contact Us</NavLink></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                    <span>
                        <input className="searchInput" type="text" placeholder="search"/>
                        <i class="fa fa-search"></i>
                    </span>
                </form>
            </div>
        </div>
    );
}

export default Navbar;
