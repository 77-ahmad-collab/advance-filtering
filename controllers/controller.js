const bootcamp = require("../models/bootcamp");

const createBootcamp = async (req, res) => {
  try {
    const result = await bootcamp.create(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(400).send(err);
  }
};

const getBootcamp = async (req, res) => {
  try {
    const result = await bootcamp.find({});
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(400).send(err);
  }
};

const updateBootcamp = async (req, res) => {
  try {
    //first find the document with a id that needs to be updated
    const data = await bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runvalidator: true,
    });
    if (!data) {
      res.status(404).json({
        data: "no user exists",
      });
    }
    res.status(200).json({
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      data: "not found",
    });
  }
};

const deleteBootcamp = async (req, res) => {
  try {
    //first find the document with a id that needs to be updated
    const result = await bootcamp.findByIdAndDelete(req.params.id);
    if (!result) {
      res.status(404).json({
        data: "no bootcamp found",
      });
    }
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      data: "not found",
    });
  }
};

module.exports = {
  createBootcamp,
  getBootcamp,
  deleteBootcamp,
  updateBootcamp,
};
