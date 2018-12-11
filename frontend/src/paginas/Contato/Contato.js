import React, { Component } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import Botao from '../../componentes/Botao/Botao'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import Footer from '../../componentes/Footer/Footer'
import './Contato.css'

class Contato extends Component {
  constructor(props) {
    super(props)
    this.nomeRef = React.createRef()
    this.telefoneRef = React.createRef()
    this.emailRef = React.createRef()

    this.state = { desabilitado: true }
  }

  habilitaOuDesabilita = () => {
    const campoNome = this.nomeRef.current
    const campoTelefone = this.telefoneRef.current
    const campoEmail = this.emailRef.current
    

    if (campoNome.temErro() || campoTelefone.temErro() || campoEmail.temErro()) {
      this.setState({ desabilitado: true })
    } else {
      this.setState({ desabilitado: false })
    }
  }
  render() {
    return (
      <div>
        <div className="contato">
          <h1 className="contato__titulo">Contato & Feedback </h1>
          <Legenda htmlFor="nome">Nome:</Legenda>
          <Campo ref={this.nomeRef}
            id="nome" type="text"
            name="nome"
            placeholder="Nome"
            required minLength={10}
            onChange={this.habilitaOuDesabilita} />

          <Legenda htmlFor="telefone">Telefone:</Legenda>
          <Campo ref={this.telefoneRef}
            id="telefone" type="tel"
            name="telefone"
            placeholder="Telefone"
            required onChange={this.habilitaOuDesabilita} />

          <Legenda htmlFor="email">Email:</Legenda>
          <Campo ref={this.emailRef}
            id="email" type="email"
            name="email"
            placeholder="Email"
            required onChange={this.habilitaOuDesabilita} />

          <Legenda htmlFor="mensagem">Mensagem:</Legenda>
          <textarea
            className="mensagem"
            name="texto"
            placeholder="Digite um texto..."
            rows={6}
            autoComplete="off"
          />
          <Botao desabilitado={this.state.desabilitado}>Enviar</Botao>
          <Footer/>
        </div>

        <button className="contatos__botao" onClick={this.props.abreCarousel}>
          <IoIosArrowBack />
          <p> Voltar </p>
        </button>
      </div>
    )
  }
}

export default Contato