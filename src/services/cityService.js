const { CityRepo } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepoObj = new CityRepo();
  }

  async createCity(data) {
    try {
      const response = await this.cityRepoObj.createCity(data);
      return response;
    } catch (error) {
      console.log("Error occured at Service layer", error);
    }
  }

  async deleteCity(cityId) {
    try {
        const response = await this.cityRepoObj.deleteCity(cityId);
        return response;
    } catch (error) {
      console.log("Error occured at Service layer", error);
    }
  }

  async readCity(cityId) {
    try {
        const response = await this.cityRepoObj.readCity(cityId);
        return response;
    } catch (error) {
      console.log("Error occured at Service layer", error);
    }
  }

  async updateCity(cityId, data) {
    try {
        const response = await this.cityRepoObj.updateCity(cityId,data);
        return response;
    } catch (error) {
      console.log("Error occured at Service layer", error);
    }
  }
}

module.exports = CityService;