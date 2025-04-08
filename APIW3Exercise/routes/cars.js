const express = require('express');
const router = express.Router();
const cars = require('../Controllers/cars');  


router.get('/', cars.index);  
router.get('/:company', cars.show);  
router.post('/', cars.create);  
router.patch('/:company', cars.update);  
router.delete('/:company', cars.destroy);  

module.exports = router;
