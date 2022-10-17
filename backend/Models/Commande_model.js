const mongoose = require("mongoose");

const commandeSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  livred: {
    type: Number,
    default: 1,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Articles",
    },
  ],
}
 ,{ timestamps: true }
);

module.exports = mongoose.model("Commandes", commandeSchema);



