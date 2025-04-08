const cars =require('../cars.json').car_sale;

class Car {
    constructor(car){
       
       this.id = car.id;
       this.continent = car.Continent;
       this.company = car.Company;
       this.sales= car.Sales;
       
    }

    static showAll(){
        return cars.map(c => new Car(c))
       }

       static show(company){
        const car = cars.find((car) => car.company.toLowerCase() == company)
        if(car) {
            return new Car(car)
        } else{
            throw "The car doesnt exist"
        }
       }
       static create(data) {
        const newCar = data
        console.log(newCar)

        newCar['id'] = cars.length + 1
        cars.push(newCar)

        return new Car(newCar)
    }

    update(data){
        const updateCar = cars.find(car => car.company.toLowerCase() == this.company.toLowerCase())
        if (updateCar) {
            updateCar.company = data.company
            updateCar.continent = data.continent;
    return new Car(updateCar);
    } else {
        throw " Car brand not Found"
    }
    }

    destroy(){
        const deletedCar = cars.find(car => car.company.toLowerCase() == this.company.toLowerCase())
    
        if (deletedCar){
            const index = cars.indexOf(deletedCar)
    
         cars.splice(index, 1)
        } else{
            throw ' Quote not found '
        }
        
    }

    }
       module.exports = Car
