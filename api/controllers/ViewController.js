/**
 * ViewController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  home: function(req, res) {
    res.view("pages/index");
  }
};
