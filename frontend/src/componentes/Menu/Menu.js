import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'


class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = { aberto: false }
    }

    sair = () => {
        this.props.deslogaUsuario()
    }

    render() {
        return (
            <nav className="navbar-menu">
                <ul className="navbar-menu__opcoes">
                    {this.props.usuario ? (
                        <li>
                            <NavLink to="/login" activeClassName="navbar-menu__opcoes--ativo" onClick={this.sair}>
                                Sair
                            </NavLink>
                        </li>
                    ) : (
                        <li>
            
                  
                            <NavLink to="/login" activeClassName="navbar-menu__opcoes--ativo" onClick={this.props.login}>
                                Sou Instituição
                            </NavLink>
                       
                        
                        </li>       
                        )}
                </ul>
            </nav>
        )

    }

}

export default Menu