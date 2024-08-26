import React, {useState} from 'react';
import styles from './Navbar.module.css';
import {getImageUrl} from '../../utils';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <a className={styles.title}>Portfolio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn}
                    src={menuOpen ? 
                        getImageUrl("nav/menuIcon.png")
                        : getImageUrl("nav/menuIcon.png")}
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{ width: "45px", height: "45px", filter: "invert(100%)" }} // Add style to adjust image size and invert color
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                            </ul>
                        </div>
        </nav>
    );
}
