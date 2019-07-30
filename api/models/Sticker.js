/**
 * Sticker.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: "string",
      required: true
    },
    image: {
      type: "string",
      required: true
    },
    rooms: {
      collection: "room",
      via: "stickers"
    }
  }
};
