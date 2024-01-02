const { FlightRepo , AirplaneRepo} = require('../repository/index');
const { comapreTime } = require('../utils/helper');
class FlightService {

    constructor(){
        this.airplaneRepo = new AirplaneRepo();
        this.flightRepo = new FlightRepo();
    }

    async createFlight(data){
        try {
            if(!comapreTime(data.arrivalTime , data.departureTime)){
                throw {error : 'Arrival time cannot be greater than departure time'};
            }
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

    async getAllFlightsData(data){
        try {
            const flights = await this.flightRepo.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("Error at service layer ",error);
            throw{error};
        }
    }
}

module.exports = FlightService