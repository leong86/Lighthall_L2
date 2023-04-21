import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './navbar.css'

const NavBar = () => {
    return (
        <section id='nav'>
            <div className="navbar__container">
                <h2>Tasks Manager</h2>
                <nav>
                    <ul>
                        <a>
                            <Link to="/view_task"> View Tasks</Link>
                        </a>
                        <a>
                            <Link to="/edit_tasks"> Edit Tasks</Link>
                        </a>
                        <a>
                            <Link to=""> Logout</Link>
                        </a>
                    </ul>

                </nav>
            </div>
        </section>
    )
}

export default NavBar
