ReviewController = require("../routes/ReviewController");
var should = require('should');


describe("ReviewController", function () {
    
    it("returns a view", function () {
        var reviewController = new ReviewController();
        var view = reviewController.index();
        (view.title === "Review").should.be.ok;
    });

}); 