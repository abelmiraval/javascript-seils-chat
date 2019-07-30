/**
 * Message.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    text: {
      type: "string",
      allowNull: false,
      required: true
    },
    owner: {
      model: "room"
      //No se especifica que sea unico para permitir agregar mas entidades de este tipo
    }
  }
};
