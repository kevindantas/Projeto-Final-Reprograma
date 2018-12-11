import React, { Component } from 'react'
import { cadastraPerfil, alteraPerfil, removePerfil } from '../../redux/actions'
import { connect } from 'react-redux'
import './Perfil.css'

class Perfil extends Component {
    constructor(props) {
        super(props)
        this.state = { editando: false }
    }

    cadastraOuAlteraPerfil = (evento) => {
        evento.preventDefault()

        const cadastrando = !this.props.id
        const form = evento.target

        if (cadastrando) {
            const dados = {
                nome: form.nome.value,
                email: form.email.value,
                endereco: form.endereco.value,
                telefone: form.telefone.value,
                cidade: form.cidade.value
            }

            this.props.cadastraPerfil(dados)

            form.reset()
        } else {
            const dados = {
                id: this.props.id,
                nome: form.nome.value,
                email: form.email.value,
                telefone: form.telefone.value,
                cidade: form.cidade.value,
                endereco: form.endereco.value
            }

            this.props.alteraPerfil(dados)

            this.setState({ editando: false })
        }
    }

    habilitaEdicao = () => {
        this.setState({ editando: true })
    }

    removePerfil = () => {
        const id = this.props.id
        this.props.removePerfil(id)
    }

    render() {
        const cadastrando = !this.props.id

        return (
            <form className="perfil" onClick={this.habilitaEdicao} onSubmit={this.cadastraOuAlteraPerfil}>
            <h3>Editar Informações</h3> 
                <input
                    className="instituicao"
                    type="text"
                    name="nome"
                    placeholder="Nome da Instituição"
                    autoComplete="off"
                    defaultValue={this.props.nome}
                />
                <input
                    className="instituicao"
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="off"
                    defaultValue={this.props.email}
                />

                <input
                    className="instituicao"
                    type="tel"
                    name="telefone"
                    placeholder="Telefone"
                    autoComplete="off"
                    defaultValue={this.props.telefone}
                />

                <input
                    className="instituicao"
                    type="text"
                    name="cidade"
                    placeholder="Cidade"
                    autoComplete="off"
                    defaultValue={this.props.cidade}
                />
                
                <input
                    className="instituicao"
                    type="text"
                    name="endereco"
                    placeholder="Endereço"
                    autoComplete="off"
                    defaultValue={this.props.endereco}
                />


                {(cadastrando || this.state.editando) && (
                    <button className="perfil__botao-concluir">
                        Concluído
                    </button>
                )}

                {!cadastrando && this.state.editando && (
                    <button className="perfil__botao-remover" type="button" onClick={this.removePerfil}>
                        Excluir Cadastro
                    </button>
                )}
            </form>
        )
    }
}

export default connect(
    null,
    { cadastraPerfil, alteraPerfil, removePerfil }
)(Perfil)