const db = require("../models/workout");

module.exports = function(app) {
  app.get("/api/workouts", (req, res) => {
    db.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/workouts/:id", (req, res) => {
    const id = mongojs.ObjectId(req.params.id);
    db.find({ _id: id })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
