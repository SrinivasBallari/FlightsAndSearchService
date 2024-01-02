const { Airplane } = require('../models/index');

class AirplaneRepo {
    async getAirplane(id){
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("Error in repo layer",error);
            throw{error};
        }
    }
}

module.exports = AirplaneRepo;