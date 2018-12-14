require('dotenv-safe').load();
const jwt = require('jsonwebtoken');
const express = require('express');
const usersRoute = require('./users/routes.js');
const users = require('./users/users.js');
const app = express();
const PORT = process.env.PORT || 5000;

let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/integration");

let db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro de conexão."));
db.once("open", function () {
  console.log("Conexão feita com sucesso.");
});

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});

app.use(express.json());
app.use('/api/users', usersRoute);

app.post('/api/login', (req, res) => {
  authenticatesUser(req.body, (error, id) => {
    let token;

    if (error) {
      return res.status(error.code).send(error.message);
    }

    token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 3000
    });

    res.send({ auth: true, token });
  });
});

app.get('api/home', (req, res) => {
  mostrarDados(req.body, (error, id) => {
    let token;

    if (error) {
      return res.status(error.code).send(error.message);
    }

    token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 3000
    });

    res.send({ auth: true, token });
  });
});

function authenticatesUser(authUser, cb) {
  users.findOne({
    email: authUser.email,
    senha: authUser.senha
  }, function (error, response) {
    if (error) {
      return cb({ code: 500, message: "Usuário ou senha inválido." });
    }
    return cb(null, response.id);
  }
  );
}

function mostrarDados(user, cb) {
  users.findOne({
    email: user.email,
    nome: user.nome
  }, function (error, response) {
    if (error) {
      return cb({ code: 500, message:" "});
    }
    return cb(null, response.id);
  }
  );
}

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}...`));
