const {flight}  = require('../models/index');

class FlightRepo {

    async createFlight(data){
        try {
            const createdFlight = await flight.create(data);
            return createdFlight;
        } catch (error) {
            console.log("Error in repository layer",error);
            throw(error);
        }
    }

}

module.exports = FlightRepo;