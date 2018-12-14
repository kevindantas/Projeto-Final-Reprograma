
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { listaPerfil} from '../../redux/actions'
import Perfil from '../../componentes/Perfil/Perfil'
import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props)
  //   this.state = {
  //     dados: [{
  //         nome:"sabrina"},
  //         {email:"sa@email.com"
  //     }]}
   }

//ira carregar antes do render
  componentDidMount() {
    if (this.props.perfil) {
      this.props.listaPerfil()
      // this.setState({dados: this.props.alteraState});
    }
  }
  render() {
    if (!this.props.usuario) {
      return <Redirect to="/inicio" />
    }

    return (
      <main className="home">
            <Perfil />
        
              <div alteraState>
                {this.props.perfils.map(perfil => (
                  <Perfil 
                    id={perfil.id}
                    nome={perfil.nome}
                    email={perfil.email}
                  />
                ))}
              </div>
      
      </main>
    )
  }
}

export default connect(
  (state) => ({ usuario: state.usuario, perfils: state.perfils }),
  { listaPerfil, }
)(Home)
