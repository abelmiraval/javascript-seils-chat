/**
 * InformationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  store: async function(req, res) {
    //Logica
    let room_id = req.params.room_id;

    let data = {
      description: req.body.description,
      image: req.body.image,
      topic: req.body.topic,
      //FK
      owner: room_id
    };

    await Information.create(data);

    return res.status(201).json({ message: "Elemento creado" });
  }
};
