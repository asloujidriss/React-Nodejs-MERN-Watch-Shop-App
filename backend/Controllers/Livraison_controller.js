const  LivraisonModel = require ("../Models/Livraison_model")

module.exports = {
  createLiv: function (req, res) {
    const livraison = new LivraisonModel(req.body);
    livraison.save(req.body, function (err, item) {
      if (err) {
        res
          .status(404)
          .json({
            success: false,
            message: "created delivery failed",
            data: null,
          });
      } else {
        res
          .status(201)
          .json({
            success: true,
            message: "delivery created successfully",
            data: item,
          });
      }
    });
  },

  getAllLiv: function (req, res) {
    LivraisonModel.find(function (err, item) {
      if (err) {
        res.status(406).json({
          success: false,
          message: "cannot got all deliveries",
          data: null,
        });
      } else {
        res
          .status(201)
          .json({ success: true, message: "list of deliveries", data:item });
      }
    });
  },

  getbyId: function (req, res) {
    LivraisonModel.findById(req.params.id, function (err, item) {
      if (err) {
        res.status(405).json({
          success: false,
          message: "failed to get delivery by ID",
          data: null,
        });
      } else {
        res
          .status(202)
          .json({ success: true, message: "delivery founded", data: item });
      }
    });
  },

  getbyName: function (req, res) {
    LivraisonModel.find({id_liv: req.query.id_liv}, function (err, items) {
      if (err) {
        res.status(405).json({
          success: false,
          message: "connot get delivery by this name",
          data: null,
        });
      } else {
        res
          .status(202)
          .json({
            success: true,
            message: "delivery by this name has founded",
            data: items,
          });
      }
    });
  },

  updateLiv: function (req, res) {
    LivraisonModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      function (err, item) {
        if (err) {
          res.status(401).json({
            success: false,
            message: "connot update delivery",
            data: null,
          });
        } else {
          res
            .status(200)
            .json({
              success: true,
              message: "delivery updated successfully",
              data: item,
            });
        }
      }
    );
  },

  deleteLiv: function (req, res) {
    LivraisonModel.findByIdAndDelete(req.params.id, function (err, item) {
      if (err) {
        res
          .status(406)
          .json({
            success: false,
            message: "cannot delete delivery",
            data: null,
          });
        console.log(err);
      } else {
        res
          .status(201)
          .json({
            success: true,
            messae: "delivery deleted successfully",
            data: item,
          });
      }
    });
  },
};