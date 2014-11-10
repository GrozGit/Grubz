(function (restaurantCtrl) {
    
    restaurantCtrl.init = function (app) {
        
        this.showRestaurant = function (req, res) {
            res.render("Restaurant", { title: req.params.name });
        };

        var showRestaurantDay = function(req, res) {
            res.render("Menu", { title: req.params.day, restaurant: req.params.name });
        };

        app.get("/Restaurant/:name", showRestaurant );
        
        app.get("/Restaurant/:name/:day", showRestaurantDay);
    }

}(module.exports));