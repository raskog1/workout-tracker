const db = require("../models/workout");
const mongojs = require("mongojs");

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

  app.get("/api/workouts/range", (req, res) => {
    db.find({})
      .sort({ _id: -1 })
      .limit(7)
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

  // Creates new workout with today's date only
  app.post("/api/workouts", (req, res) => {
    db.create({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    const id = mongojs.ObjectId(req.params.id);
    db.update({ _id: id }, { $push: { exercises: req.body } })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
