import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listaPerfil} from '../../redux/actions'
import Home from '../Home/Home'
import './QueroContribuir.css'

class QueroContribuir extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
      this.props.listaPerfil()
  }

  render() {
    return (
      <main className="contribuir">
         <h2>Instituições Cadastradas</h2>
              <div>
                <Home/>

              <div>
                {this.props.users.map(user => (
                  <Home 
                  key={user._id}
                  id={user._id}
                    nome={user.nome}
                    email={user.email}
                    endereco={user.endereco}
                    telefone={user.telefone}
                    cidade={user.cidade}
                  />
                  ))}
              </div>
                  </div>
      
      </main>
    )
  }
}

export default connect(
  (state) => ({ usuario: state.usuario }),
  { listaPerfil, }
)(QueroContribuir)
