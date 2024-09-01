import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbarSection">
        <Link to="/" className="btn btn-info mx-2">Home</Link>
        <Link to="/add-entry" className="btn btn-warning mx-2">Add New Entry</Link>
        <Link to="/view-entries" className="btn btn-success mx-2">View All Entries</Link>
    </nav>
  )
}

export default Navbar