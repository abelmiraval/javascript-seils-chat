/**
 * Information.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    //Atributos
    description: {
      type: "string",
      required: true,
      allowNull: false
    },
    image: {
      type: "string",
      defaultsTo: "https://picsum.photos/id/884/300/300"
    },
    topic: {
      type: "string",
      defaultsTo: "random",
      isIn: ["random", "magic", "games", "code"]
    },

    //relacion
    owner: {
      model: "room",
      unique: true //Las llaves foraneas siempre se definen como unicas
    }
  }
};
