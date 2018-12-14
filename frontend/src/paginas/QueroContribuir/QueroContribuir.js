import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { listaPerfil} from '../../redux/actions'
import Perfil from '../../componentes/Perfil/Perfil'
import './QueroContribuir.css'

class QueroContribuir extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.usuario) {
      this.props.listaPerfil()
    }
  }

  render() {
    if (!this.props.usuario) {
      return <Redirect to="/inicio" />
    }

    return (
      <main className="contribuir">
          <Perfil />
              <div>
                {this.props.users.map(user => (
                  <Perfil 
                    key={user.id}
                    id={user.id}
                    nome={user.nome}
                    email={user.email}
                    endereco={user.endereco}
                    telefone={user.telefone}
                    cidade={user.cidade}
                  />
                ))}
              </div>
      
      </main>
    )
  }
}

export default connect(
  (state) => ({ usuario: state.usuario }),
  { listaPerfil, }
)(QueroContribuir)
