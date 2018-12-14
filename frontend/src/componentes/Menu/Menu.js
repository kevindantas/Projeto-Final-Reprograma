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
                    {this.props.usuario && (
                        <li>
                            <NavLink to="/quem-somos" activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaMenu}>
                                Como Funciona
                            </NavLink>
                        </li>
                    )}

                    {this.props.usuario ? (
                        <li>
                            <NavLink to="/contato" activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaMenu}>
                                Contato
                            </NavLink>
                        </li>
                    ) : (
                        <li>
                            <NavLink to="/login">
                                <button className="navbar-menu__botao--ativo ">
                                    Sou Instituição
                                </button>
                            </NavLink>
                        </li>
                    )}

                    {this.props.usuario ? (
                        <li>
                            <NavLink to="/inicio" activeClassName="navbar-menu__opcoes--ativo" onClick={this.sair}>
                                Sair
                            </NavLink>
                        </li>
                    ) : (
                        <li>
                            <NavLink to="/quero-contribuir">
                                <button className="navbar-menu__botao--ativo ">
                                    Quero Contribuir
                                </button>
                            </NavLink>
                        </li>
                    )}

                </ul>
            </nav>
        )

    }

}

export default Menu