import axios from 'axios'

const configuracoes = {
  baseURL: 'http://localhost:5000/api'
}

const json = localStorage.getItem('usuario')
if (json) {
  const usuario = JSON.parse(json)
  configuracoes.headers = {
    'x-access-token': usuario.token
  }
}

const api = axios.create(configuracoes)

export function logaUsuario(dados) {
  return (dispatch) => {
    const json = {
      email: dados.email,
      senha: dados.senha
    }
    // Adicionar o return pra depois quando der o dispatch na action
    // a gente poder ter acesso ao .then que é chamado qnd acabar de fazer a requisicao
    return api
      .post('/login', json)
      .then(response => {
        api.defaults.headers.common['x-access-token'] = response.data.token
        dispatch({ type: 'LOGA_USUARIO', dados: response.data })
      })
      .catch(error => {
        console.error(error)
        alert('Email ou usuário invalido!')
      })
  }
}
 //fazer outro put igual para direcionar para rota querocontribuir igual o de cima
export function cadastraUsuario(dados) {
  return (dispatch) => {
    const json = {
      nome: dados.nome,
      email: dados.email,
      senha: dados.senha
    }

    // Dando o return nessa requisicao aqui
    // O componente vai ter acesso ao .then que é chamado dps de acabar a requisição
    return api
      .post('/users', json)
      .then(() => {
        return dispatch(logaUsuario(dados))
      })
  }
}

export function deslogaUsuario() {
  return {
    type: 'DESLOGA_USUARIO'
  }
}

export function alteraPerfil(dados) {
  return (dispatch) => {
    const url = `/users/${dados.id}`
    const json = {
      nome: dados.nome,
      email: dados.email,
      endereco: dados.endereco,
      telefone: dados.telefone,
      cidade: dados.cidade
    }
    api
      .put(url, json)
      .then(() => {
        dispatch({ type: 'ALTERA_USUARIO', dados })
      })
  }
}

export function listaPerfil(dados) {
  return (dispatch) => {
    const url = `/users/${dados.id}`
    
    api
    .get(url)
    .then(response => {
      const dados = response.data.map(item => ({
        id: item._id,
        nome: item.nome,
        email: item.email,
        endereco: dados.endereco,
        telefone: dados.telefone,
        cidade: dados.cidade
        }
        ))
        dispatch({ type: 'LISTA_USUARIO', dados })
      })
    }
  }
  export function removePerfil(id) {
    return (dispatch) => {
      const url = `/users/${id}`
      api
        .delete(url)
        .then(() => {
          dispatch({ type: 'REMOVE_USUARIO', id })
        })
    }
  }
