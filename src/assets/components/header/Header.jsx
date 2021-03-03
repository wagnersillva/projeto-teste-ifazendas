import React, { Component } from 'react'
import './style.css'
import './main'
import imgLogo from '../../img/logo-ifazendas.png'
import navbarToggleIcon from '../../img/icon-navbar-menu-verde.png'

export default class Header extends Component {
    render() {
        return (
            <div className="header" id="header">
                <div className="logo">
                    <img src={imgLogo} className="imgLogo" alt="logo iFazendas" />
                </div>
                <nav className="navbar"  id="DivNavbar">
                    <button className="navbar-toggler" id="navbarToggler" type="button">
                        <img src={navbarToggleIcon} className="navbar-icon" id="navbarIcon"  alt="navbar-icon"/>
                    </button>
                    <div className="navbar-collapse" id="navbarNav">
                        <div className="navbar-nav" id="DivNavbarNav">
                            <a className="nav-item" href="/">Home</a>
                            <a className="nav-item" href="/">Blog</a>
                            <a className="nav-item" href="/">Suporte</a>
                            <a className="nav-item" href="/">Preços</a>
                            <a className="nav-item" href="/">Contato</a>
                            <button type="button" className="nav-item btn">ENTRAR</button>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}