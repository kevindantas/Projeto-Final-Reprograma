import { combineReducers } from 'redux'

let usuarioInicial = null

const json = localStorage.getItem('usuario')
if (json) {
  usuarioInicial = JSON.parse(json)
}

function usuario(state = usuarioInicial, action) {
  switch (action.type) {
    case 'LOGA_USUARIO':
      const usuario = action.dados
      const json = JSON.stringify(usuario)
      localStorage.setItem('usuario', json)
      return usuario
    case 'DESLOGA_USUARIO':
      localStorage.removeItem('usuario')
      return null
    default:
      return state
  }
}

function perfils(state = [], action) {
  switch (action.type) {
    case 'LISTA_CADASTRO':
    const cadastro = action.dados
    const json = JSON.stringify(cadastro)
    localStorage.setItem('cadastro', json)
    return cadastro
    case 'CADASTRA_PERFIL':
      return state.concat(action.dados)
    case 'ALTERA_PERFIL':
      return state.map(item =>
        item.id === action.dados.id ? action.dados : item
      )
    case 'REMOVE_PERFIL':
      return state.filter(item => item.id !== action.id)
    case 'LISTA_PERFIL':
      return action.dados
    default:
      return state
  }
}

const reducers = combineReducers({ usuario, perfils })

export default reducers