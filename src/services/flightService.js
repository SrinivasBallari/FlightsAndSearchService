const { FlightRepo , AirplaneRepo} = require('../repository/index');
const { compareTime } = require('../utils/helper');
const CrudService = require('./crudService');

class FlightService extends CrudService{

    constructor(){
        const flightRepo = new FlightRepo();
        super(flightRepo);

        this.flightRepo = flightRepo;
        this.airplaneRepo = new AirplaneRepo();
    }

    async create(data){
        try {
            if(!compareTime(data.arrivalTime , data.departureTime)){
                throw {error : 'Arrival time cannot be greater than departure time'};
            }
            const airplane = await this.airplaneRepo.read(data.airplaneId);
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

    async readAll(data){
        try {
            const flights = await this.flightRepo.readAll(data);
            return flights;
        } catch (error) {
            console.log("Error at service layer ",error);
            throw{error};
        }
    }
}

module.exports = FlightService