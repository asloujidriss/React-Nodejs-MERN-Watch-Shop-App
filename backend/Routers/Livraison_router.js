const express = require("express");
const livraisonController = require("../Controllers/Livraison_controller")
const route = express.Router();


route.post("/create",livraisonController.createLiv);

route.get("/getAll",livraisonController.getAllLiv);

route.get("/getLivbyId/:id",livraisonController.getbyId);

route.get("/getLivbyName/",livraisonController.getbyName);

route.put("/updateLiv/:id",livraisonController.updateLiv);

route.delete("/deleteLiv/:id",livraisonController.deleteLiv);

module.exports = route;