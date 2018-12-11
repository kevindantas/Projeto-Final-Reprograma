import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { deslogaUsuario } from '../../redux/actions'
import Menu from '../Menu/Menu'
import logo from './logo.png'
import Inicio from '../../paginas/Inicio/Inicio'
import './Navbar.css'

function Navbar(props) {
    return (
        <header className="navbar"> 
            <Link to = "/inicio" > 
                <img className="navbar__logo" src={logo} alt="Logo Alimentando Vidas" />
            </Link>
            <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario} />
        </header>
    )
}

export default withRouter(
    connect(
      (state) => ({ usuario: state.usuario }),
      { deslogaUsuario }
    )(Navbar)
  )