const express = require('express');
const perfils = require('./perfils.js');
const jwt = require('jsonwebtoken');
const users = require('../users/users.js');
const Joi = require('joi'); 
const router = express.Router();
const loggedUserId = token => {
let decodedId;

  if (!token) {
    throw new TokenError('Sem permissão.', 500);
  }

  jwt.verify(token, process.env.SECRET, function(error, decoded) {
    if (error) {
      throw new TokenError('Falha ao autenticar token.', 500);
    }

    decodedId = decoded.id;
  });

  return decodedId;
}

router.get('/:id', (req, res) => {
  try {
    //const perfil = findPerfil(req.params.id);
    const token = req.headers['x-access-token'];

    if (!token) {
      throw new TokenError("Sem permissão.", 500);
    }

    jwt.verify(token, process.env.SECRET, function(error, decoded) {
      if (error) {
        throw new TokenError("Falha ao autenticar token.", 500);
      }
    });

      users.findById(req.params.id, (err, perfil) => {
        if (err) res.send(err);

      res.send(user);
    });

  } catch(e) {
    res.status(e.code).send(e.message);
  }
});

router.get('/:id', (req, res) => {
  try {
    //const perfil = findPerfil(req.params.id);
    const token = req.headers['x-access-token'];

    if (!token) {
      throw new TokenError("Sem permissão.", 500);
    }

    jwt.verify(token, process.env.SECRET, function(error, decoded) {
      if (error) {
        throw new TokenError("Falha ao autenticar token.", 500);
      }
    });

      perfils.findById(req.params.id, (err, perfil) => {
        if (err) res.send(err);

      res.send(perfil);
    });

  } catch(e) {
    res.status(e.code).send(e.message);
  }
});

//cadastrando no banco
router.post('/', (req, res) => {
  const token = req.headers['x-access-token'];
  let newPerfil = new perfils({
    nome: req.body.nome,
    email: req.body.email,
    endereco: req.body.endereco,
    telefone: req.body.telefone,
    cidade: req.body.cidade
  })

  try {

    if (!token) {
      throw new TokenError('Sem permissão.', 500);
    }

    jwt.verify(token, process.env.SECRET, function(error, decoded) {
      if (error) {
        throw new TokenError('Falha ao autenticar token.', 500);
      }
    });

    validatesRequest(req.body);

    newPerfil.save(err => {
      if(err) {
        res.send(err)
      }
      res.send(newPerfil)
    })

  } catch(e) {
    console.log(e);
    res.status(e.code).send(e.message);
  }
});

//editando
router.put('/:id', (req, res) => {
  try {
    const token = req.headers['x-access-token'];

    if (!token) {
      throw new TokenError('Sem permissão.', 500);
    }

    jwt.verify(token, process.env.SECRET, function(error, decoded) {
      if (error) {
        throw new TokenError('Falha ao autenticar token.', 500);
      }
    });

    validatesRequest(req.body);
    perfils.findByIdAndUpdate(
      req.params.id,
      { $set : req.body},
      { new : true },
      function(error, perfil) {
        if(error) return res.status(error.code).send(error.message);
        res.send(perfil);
      }
    );
  } catch(e) {
    res.status(e.code).send(e.message);
  }
});

//excluindo
router.delete('/:id', (req, res) => {
  try {
    const token = req.headers['x-access-token'];

    if (!token) {
      throw new TokenError('Sem permissão.', 500);
    }

    jwt.verify(token, process.env.SECRET, function(error, decoded) {
      if (error) {
        throw new TokenError('Falha ao autenticar token.', 500);
      }
    });

    perfils.findByIdAndDelete(req.params.id, { $set: req.body },function(err, perfil) {
        if(err) return res.status(err,code).send(err,message);
        res.send(perfil)
      }
    )
  } catch(e) {
    res.status(e.code).send(e.message);
  }
});

function findPerfil(id) {
  const foundPerfil = perfils.find(perfil => perfil.id === parseInt(id));

  if (!foundPerfil) {
    throw new PerfilError(`Não foi possível encontrar o perfil de ID ${id}.`, 400);
  }

  return foundPerfil;
}

function findUser(id) { 
  const foundUser = users.find(user => user.id === parseInt(id));

  if (!foundUser) {
    throw new PerfilError(`Não foi possível encontrar o perfil de ID ${id}.`, 400);
  }

  return foundUser;
}

function validatesRequest(params) {
  const schema = {
    nome: Joi.string().min(3).required(),
    email: Joi.string().min(3).required(),
    endereco: Joi.string().min(3).required(),
    telefone: Joi.string().min(3).required(),
    cidade: Joi.string().min(3).required()
  }
  const validation = Joi.validate(params, schema);

  if (validation.error) {
    throw new PerfilError(validation.error.details[0].message, 404);
  }
}

function PerfilError(message, code) {
  this.message = message;
  this.code = code;
};

function UserError(message, code) {
  this.message = message;
  this.code = code;
};

function TokenError(message, code) {
  this.message = message;
  this.code = code;
};

function setsRelantionship(perfilId, token) {
  const user = findUser(loggedUserId(token));
  const perfil = findPerfil(perfilId);

  user.perfils.push(perfil);
}

function unsetsRelationship(perfilId, token) {
  const user = findUser(loggedUserId(token));
  const perfil= findPerfil(perfilId);
  const index = perfils.indexOf(perfil);

  user.perfils.splice(index, 1);
}

module.exports = router;
