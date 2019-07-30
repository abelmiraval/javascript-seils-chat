/**
 * MessageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  store: async function(req, res) {
    //Logica
    let room_id = req.params.room_id;
    let data = {
      text: req.body.text,
      //FK
      owner: room_id
    };

    await Message.create(data);

    return res.status(201).json({ message: "Elemento creado" });
  }
};
