import React from 'react'
// import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom'
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" herf="/">Home</a>
                         </li>
                         <li className="nav-item">
                            <a className="nav-link" herf="/">{props.abouttext}</a>
                        </li> 
                    </ul> 
                    {/* {<form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> } */}
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input"   onClick={props.toggelMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode </label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// Navbar.propTypes = {
//     title: PropTypes.string,
//     //  ensure that your pass the string type value if your pass any integer the throgth the error 
//     abouttext: PropTypes.string.isRequired
//     // is requred means you have to pass string value in any condtion otherwise throgth error 
// }

// Navbar.defualtprops = {
//     title: 'set the title here',
//     abouttext: 'set the about '
//     // when you can't pass the component then by default pass in 
// }