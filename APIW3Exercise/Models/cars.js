const Car = require('../Models/cars');

const index = async (req, res) => {
  try { 
    const cars = await Car.showAll();
    res.status(200).send(cars);
  } catch(err) {
    res.status(500).send({ error: 'Server Error' });
  }
};

const show = async (req, res) => {  
  const company = req.params.company.toLowerCase(); // Fix the variable name consistency here

  try {
    const car = await Car.show(company); // Ensure Car.show method handles case-insensitive search
    res.status(200).send(car);
  } catch (err) {
    res.status(404).send({ error: 'Car not found' }); // Improved error message
  }
};

const create = async (req, res) => {
  try {
    const newCar = await Car.create(req.body);
    res.status(201).send(newCar);
  } catch (err) { 
    res.status(409).send({ error: 'Car creation failed' }); // Improved error message
  }
};

const update = async (req, res) => {
  const company = req.params.company.toLowerCase(); // Fix the variable name consistency

  try {
    const car = await Car.show(company);
    const result = await car.update(req.body);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send({ error: 'Car not found or update failed' }); // Improved error message
  }
};

const destroy = async (req, res) => {
  const company = req.params.company.toLowerCase(); // Fix the variable name consistency

  try {
    const car = await Car.show(company);
    const result = await car.destroy();
    res.status(204).send(); // Correctly send a 204 status for successful deletion
  } catch (err) {
    res.status(404).send({ error: 'Car not found or deletion failed' }); // Improved error message
  }
};

module.exports = { index, show, create, update, destroy };
