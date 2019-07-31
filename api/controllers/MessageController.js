/**
 * MessageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list: async function(req, res) {
    let room_id = req.params.room_id;
    let messages = {};

    //Obtener informacion de DB
    let room = await Room.findOne({ where: { id: room_id } }).populate(
      "messages"
    );

    messages = room.messages;

    return res.json(messages);
  },

  store: async function(req, res) {
    //Logica
    let room_id = req.params.room_id;
    let data = {
      text: req.body.text,
      user_id: req.body.user_id,
      //FK
      owner: room_id
    };

    await Message.create(data);

    //Decir que algo ha cambiado a todos los clientes
    //blast es un metodo que nos permite hacer un broadcast  a todos los clientes que se han suscrito al canal
    sails.sockets.blast({ room: room_id });

    return res.status(201).json({ message: "Elemento creado" });
  }
};
