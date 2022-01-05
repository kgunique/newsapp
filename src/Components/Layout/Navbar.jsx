import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark main-navbar">
        <NavLink className="navbar-brand" to="/">News APP</NavLink>
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to ="/">Home</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/expense">Expense Report</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/income">Income Report</NavLink>
                    </li>
                </ul>
                </div>

                <Link className="btn btn-primary" to="/user/add">Add User</Link>
            </div>
        </nav>
        </>
    )
}

export default Navbar
