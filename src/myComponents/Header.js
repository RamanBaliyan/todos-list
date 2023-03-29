import React from 'react'
import PropTypes from 'prop-types'


export default function Header(props) {
  return (
    <nav classname= "navbar navbar-expand-lg bg-body-tertiary">
    <div classname= "container-fluid">
      <a classname= "navbar-brand" href="#">{props.title}</a>
      <button classname= "navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span classname= "navbar-toggler-icon"></span>
      </button>
      <div classname= "collapse navbar-collapse" id="navbarSupportedContent">
        <ul classname= "navbar-nav me-auto mb-2 mb-lg-0">
          
          <li classname= "nav-item">
            <a classname= "nav-link" href="#">Link</a>
          </li>
     
          <li classname= "nav-item">
            <a classname= "nav-link disabled">Disabled</a>
          </li>
        </ul>
        { props.searchBar? <form classname= "d-flex" role="search">
          <input classname= "form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button classname= "btn btn-outline-success" type="submit">Search</button>
        </form>:"No search bar"}
      </div>
    </div>
  </nav>
  )
}
Header.defaultProps = {
    title: "my name"
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}



