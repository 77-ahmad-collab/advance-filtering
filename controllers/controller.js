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
    // console.log(req.query);
    let reqquery = { ...req.query };
    // console.log(reqquery);
    const removal = ["sort"];
    removal.map((val) => delete reqquery[val]);
    // console.log(reqquery, "req query");
    let strquery = JSON.stringify(reqquery);
    strquery = strquery.replace(
      /\b(gt|gte|lt|lte|in)\b/g,
      (match) => `$${match}`
    );
    strquery = JSON.parse(strquery);
    // console.log(strquery);

    let result = bootcamp.find(strquery);
    if (req.query.sort == "-price") {
      // console.log(req.query.sort);

      const sortbyarr = req.query.sort.split(",");
      const sortbystr = sortbyarr.join(" ");

      console.log("sort max to lowest");
      result = result.sort({ price: -1 });
    } else {
      console.log("no sort lowest to max");
      result = result.sort({ price: 1 });
    }
    const fdata = await result;
    res.status(200).json({
      data: fdata,
    });
  } catch (error) {
    res.status(400).send(error);
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
