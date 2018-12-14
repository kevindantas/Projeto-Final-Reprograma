let mongoose = require('mongoose');

let Schema =mongoose.Schema;

let UserSchema = new Schema(
  {
    _id:{type: mongoose.Schema.Types.ObjectId, auto: true},
    nome: {type: String},
    senha: {type: String},
    email: {type: String, unique: true}
  },
 
  {
    collection: "users",
    versionKey: false,
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  }
);

UserSchema.virtual("id").get(function() {
  return this._id;
});


let users = mongoose.model("users", UserSchema)

module.exports = users;
