const Car = require('../Models/Car');

const index = async (req, res) => {
  try { 
    const cars = await Car.showAll();
    res.status(200).send(cars);
  } catch(err) {
    res.status(500).send({ error: 'Server Error' });
  }
};

const show = async (req, res) => {  
  const company = req.params.company.toLowerCase(); 

  try {
    const car = await Car.show(company); 
    res.status(200).send(car);
  } catch (err) {
    res.status(404).send({ error: 'Car not found' }); 
  }
};

const create = async (req, res) => {
  try {
    const newCar = await Car.create(req.body);
    res.status(201).send(newCar);
  } catch (err) { 
    res.status(409).send({ error: 'Car creation failed' }); 
  }
};

const update = async (req, res) => {
  const company = req.params.company.toLowerCase(); 

  try {
    const car = await Car.show(company);
    const result = await car.update(req.body);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send({ error: 'Car not found or update failed' }); 
  }
};

const destroy = async (req, res) => {
  const company = req.params.company.toLowerCase(); 

  try {
    const car = await Car.show(company);
    const result = await car.destroy();
    res.status(204).send(); 
  } catch (err) {
    res.status(404).send({ error: 'Car not found or deletion failed' }); 
  }
};

module.exports = { index, show, create, update, destroy };
