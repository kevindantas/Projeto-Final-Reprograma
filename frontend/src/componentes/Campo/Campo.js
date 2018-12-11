import React, { Component } from 'react'
import './Campo.css'

class Campo extends Component {
    constructor(props) {
        super(props)
        this.valor = ''
        this.state = {
            modificado: false,
            erro: ''
        }
    }

    getValor() {
        return this.valor;
    }

    temErro() {
        if (!this.state.modificado || this.state.erro) {
            return true
        } else {
            return false
        }
    }
        valida = (evento) => {
            const input = evento.target
            const { value, type } = input
            const { required, minLength } = this.props
            const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
            let mensagem = ''

            if (required && input.value.trim() === '') {
                mensagem = 'Campo obrigatório'
            } else if (minLength && value.length < minLength) {
                mensagem = `Digite pelo menos ${minLength} caracteres`
            } else if (type === 'email' && !regex.test(value)) {
                mensagem = 'valor invalido'
            } else {

            }
            this.setState({ modificado: true , erro: mensagem}, this.props.onChange)
            
            this.valor = value
        }


        render() {
            return (
                <div>
                    <input className="caixa-texto"
                        id={this.props.id}
                        type={this.props.type}
                        name={this.props.name}
                        placeholder={this.props.placeholder}
                        onChange={this.valida}
                        onBlur={this.valida}
                    />

                    <p className="grupo__erro" >{this.state.erro}</p>
                </div>
            )
        }
    }

    export default Campo 