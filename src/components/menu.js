import React from 'react';
import { Link } from 'gatsby';
// import { red } from 'ansi-colors';


const Menu = () => {
    return (
        <div style={{
            background: '#aabbc7',
            paddingTop: '10px'
        }}>

            <ul style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/gallery">Gallery</Link></li>
                <li> <Link to="/blog">Avengers</Link></li>
                <li> <Link to="/aboutus">About Avengers</Link></li>
                <li> <Link to="/contact">Contact</Link></li>

            </ul>


        </div>
    )
}

export default Menu
