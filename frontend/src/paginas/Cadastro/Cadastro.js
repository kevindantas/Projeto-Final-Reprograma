import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { cadastraUsuario } from '../../redux/actions'
import Link from '../../componentes/Link/Link'
import Botao from '../../componentes/Botao/Botao'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import './Cadastro.css'


class Cadastro extends Component {
  constructor(props) {
    super(props)

    this.nomeRef = React.createRef()
    this.emailRef = React.createRef()
    this.senhaRef = React.createRef()

    this.state = { desabilitado: true }
  }

  enviaDados = (evento) => {
    evento.preventDefault()

    const campoNome = this.nomeRef.current
    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current

    const dados = {
      nome: campoNome.getValor(),
      email: campoEmail.getValor(),
      senha: campoSenha.getValor()
    }

    this.props.cadastraUsuario(dados)
  }

  habilitaOuDesabilita = () => {
    const campoNome = this.nomeRef.current
    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current

    if (campoNome.temErro() || campoEmail.temErro() || campoSenha.temErro()) {
      this.setState({ desabilitado: true })
    } else {
      this.setState({ desabilitado: false })
    }
  }

  render() {
    if (this.props.usuario) {
      return <Redirect to="/" />
    }

    return (
      <main className="cadastro">
        <h1>Conta</h1>
        <p>Envie o formulário para criar uma conta!</p>

        <form onSubmit={this.enviaDados}>
          <Legenda htmlFor="nome">Nome:</Legenda>
          <Campo ref={this.nomeRef} id="nome" type="text" name="nome" placeholder="Nome" required minLength={10} onChange={this.habilitaOuDesabilita} />

          <Legenda htmlFor="email">Email:</Legenda>
          <Campo ref={this.emailRef} id="email" type="email" name="email" placeholder="Email" required onChange={this.habilitaOuDesabilita} />

          <Legenda htmlFor="senha">Senha:</Legenda>

          <Campo ref={this.senhaRef} id="senha" type="password" name="senha" placeholder="Senha" required minLength={6} onChange={this.habilitaOuDesabilita} />
          <Botao desabilitado={this.state.desabilitado} >Enviar </Botao>

          <Link url="/login">Fazer login</Link>
        </form>
      </main>
    )
  }
}

export default connect(
  (state) => ({  usuario: state.usuario  }),
  { cadastraUsuario }
)(Cadastro)
