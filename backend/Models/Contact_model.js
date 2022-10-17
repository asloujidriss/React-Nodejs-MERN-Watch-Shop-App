const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    id_contact: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    Contact: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
      },
    ],
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contacts", ContactSchema);