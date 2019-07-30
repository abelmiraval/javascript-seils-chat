/**
 * MessageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  list: async function (req, res) {
    let room_id = req.params.room_id;
    let messages = {};

    //Obtener informacion de DB
    let room = await room.findOne({ id: room_id })
      .populate('messages');

    messages = room.messages;

    return res.json(messages)
  },

  store: async function (req, res) {
    //Logica
    let room_id = req.params.room_id;
    let data = {
      text: req.body.text,
      user_id: req.body.user_id,
      //FK
      owner: room_id
    };

    await Message.create(data);

    return res.status(201).json({ message: "Elemento creado" });
  }
};
