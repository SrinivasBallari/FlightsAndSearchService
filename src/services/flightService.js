const { FlightRepo , AirplaneRepo} = require('../repository/index');

class FlightService {

    constructor(){
        this.airplaneRepo = new AirplaneRepo();
        this.flightRepo = new FlightRepo();
    }

    async createFlight(data){
        try {
            const airplane = await this.airplaneRepo.getAirplane(data.airplaneId);
            const flight = await this.flightRepo.createFlight({
                ...data,
                totalSeats: airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Error at service layer ",error);
            throw{error};
        }
    }
}

module.exports = FlightService