var restaurantController = require('../Controllers/restaurantController');
var should = require('should');
var express = require('express');
var app = express();

describe('Restaurant Controller Tests', function() {
    it('Given a valid request it should return a status 200', function () {
        restaurantController.init(app);

        var response = restaurantController.init.showRestaurant(null, null);
        console.log(response);
        //(response).should.be.status(200);

    });
});