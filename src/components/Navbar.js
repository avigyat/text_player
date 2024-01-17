import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  
  return (
    <div>


        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
        <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.tittle}</a>
        <a className="navbar-brand" href="/aboutdev">Developer Info</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
 
        </div>
        </nav>


    </div>
  )
}

Navbar.propTypes = {
    tittle: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    tittle: 'Text-Player'
}