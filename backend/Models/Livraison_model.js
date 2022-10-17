const mongoose = require("mongoose")

const livraisonSchema = mongoose.Schema({
    
    id_liv:{

        type:String,
        required:true,
        trim:true
    },
    date:{

        type:String,
        required:true,
        trim:true
    },
    
    qte_liv:{

        type:Number,
        required:true,
        trim:true
    },

    prix_total:{

        type:Number,
        required:true,
        trim:true
    },
    
    Livraison: 
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Commandes",
        },
      

},{timestamps:true})

module.exports= mongoose.model("Livraisons",livraisonSchema)