const CrudService = require("./crudService");
const AirplaneRepo = require('../repository/index');

class AirplaneService extends CrudService{
    constructor(){
        const airplaneRepo = new AirplaneRepo();
        super(airplaneRepo);
    }
}

module.exports = AirplaneService;