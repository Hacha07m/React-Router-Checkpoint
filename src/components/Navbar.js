import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid d-flex justify-content-between">
        <a className="navbar-brand text-light" href="/#">NETFLIX</a>
        
        <div className="collapse navbar-collapse " >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-light" to="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
