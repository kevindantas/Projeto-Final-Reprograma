
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let PerfilSchema = new Schema(
  {
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    nome: {type: String},
    email: {type: String},
    endereco: {type: String},
    telefone: {type: String},
    cidade: {type: String}
  },
  {
    collection: "perfils",
    versionKey: false,
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  }
);

PerfilSchema.virtual("id").get(function() {
  return this._id;
});

let perfils = mongoose.model("perfils", PerfilSchema)

module.exports = perfils;
