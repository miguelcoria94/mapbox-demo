module.exports = {
  index,
  new: newHouse,
  create,
  show,
};

const House = require("../models/house");
async function index(req, res) {
  const houses = await House.find({});
  res.render("houses/index", {
    title: "ALL HOUSES",
    houses,
  });
}

function newHouse(req, res) {
  res.render("houses/new", {
    title: "ADD HOUSE",
  });
}

function create(req, res) {
  const house = new House(req.body);
  house.save();
  res.redirect("/houses");
}

async function show(req, res) {
  const house = await House.findById(req.params.id);
  res.render("houses/_id", {
    title: "HOUSE DETAIL",
    house,
  });
}
