const express = require('express')
const app = express()
const cars = require('./routes/cars')


app.get('/', (req, res)=>{ 
    res.send('Hello drivey')
})

app.use(express.json())
app.use('/cars', cars)


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app