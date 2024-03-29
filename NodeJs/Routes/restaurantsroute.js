const restaurantController = require("../controller/restaurantscontroller");
const verifyToken = require("../middleware/verifyToken");

module.exports = (app) => {
    app.post("/api/restaurant/" , restaurantController.create );
    app.get("/api/restaurant/",verifyToken, restaurantController.fetch );
    app.put("/api/restaurant/:id",restaurantController.updateOne);
    app.delete("/api/restaurant/:id",restaurantController.delete);
}