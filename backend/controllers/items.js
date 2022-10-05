const Items = require("../models/data");

exports.getAllItems = (req, res, next) => {
  Items.find()
    .then((items) => {
      const mappedItems = items.map((item) => {
        return item;
      });
      res.status(200).json(mappedItems);
    })
    .catch(() => {
      res.status(500).send(new Error("Database error!"));
    });
};

exports.getOneItem = (req, res, next) => {
  Items.findById(req.params._id)
    .then((item) => {
      if (!item) {
        return res.status(404).send(new Error("Product not found!"));
      }

      res.status(200).json(item);
    })
    .catch(() => {
      res.status(500).send(new Error("Database error!"));
    });
};
