(function(controllers) {
    var restaurantController = require("./restaurantController");
    
    controllers.init = function (app) {
        restaurantController.init(app);
    }

}(module.exports))