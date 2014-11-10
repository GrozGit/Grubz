(function (Schema) {

    var mongoose = require("mongoose");
    mongoose.connect('mongodb://localhost/grubz');

    Schema.init = function() {
        
        daySchema = new mongoose.Schema({
            dayName: String,
            dayDate: Date,
            dayMenu: [menuItemSchema]
        });

        menuItemSchema = new mongoose.Schema({
            itemName : String,
            itemPrice : Number
        });

    };



}(model.exports));