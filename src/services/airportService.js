const AirportRepo = require('../repository/airportRepo');
const CrudService = require('./crudService');

class AirportService extends CrudService {

    constructor(){
        const airportRepo = new AirportRepo();
        super(airportRepo);
    }

}

module.exports = AirportService;