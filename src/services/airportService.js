const AirportRepo = require('../repository/airportRepo');

class AirportService {
    constructor(){
        this.airportRepoObj = new AirportRepo();
    }

    async create(data){
        try {
            const response = await this.airportRepoObj.create(data);
            return response;
        } catch (error) {
            console.log('Error in airport service layer',error);
            throw({error});
        }
    }

    async read(airportId){
        try {
            const response = await this.airportRepoObj.read(airportId);
            return response;
        } catch (error) {
            console.log('Error in airport service layer',error);
            throw({error});
        }
    }
}

module.exports = AirportService;