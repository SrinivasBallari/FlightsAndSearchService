const { CityRepo } = require("../repository/index");
const CrudService = require('./crudService');

class CityService extends CrudService{
    
    constructor() {
        const cityRepo = new CityRepo();
        super(cityRepo);
        this.cityRepo = cityRepo;
    }

    async readAll(filter) {
        try {
            const response = await this.cityRepo.readAll({
                name: filter.name,
            });
            return response;
        } catch (error) {
            console.log("Error occured at Service layer", error);
        }
    }

    async createAll(cities) {
        try {
            const response = await this.cityRepo.createAll(cities);
            return response;
        } catch (error) {
            console.log("Error occured at Service layer", error);
        }
    }
}

module.exports = CityService;
