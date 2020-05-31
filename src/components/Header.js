import {Link, NavLink} from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth';

export const Header = ({startLogout}) => (
    <div className="header">
        <div className="header__content">
            <h1>Blog On</h1>
            <hr className="line"/>
            <NavLink 
                to='/home' 
                className="header__title" 
                activeClassName='is-active'>
                Home</NavLink>
            <NavLink 
                to='/blogs' 
                className="header__title" 
                activeClassName='is-active'>
                My Blogs</NavLink>
            <NavLink 
                to='/create' 
                className="header__title" 
                activeClassName='is-active'>
                New Blog</NavLink>
            <NavLink 
                to='/help' 
                className="header__title" 
                activeClassName='is-active'>
                Help</NavLink>
            <button onClick={startLogout} className="link">Logout</button>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)