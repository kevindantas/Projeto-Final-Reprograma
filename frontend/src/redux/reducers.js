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
    case 'ALTERA_USUARIO':
      return state.map(item =>
        item.id === action.dados.id ? action.dados : item
      )
    case 'REMOVE_USUARIO':
      return state.filter(item => item.id !== action.id)
    case 'LISTA_USUARIO':
      return action.dados
    default:
      return state
  }
}



const reducers = combineReducers({ usuario})

export default reducers