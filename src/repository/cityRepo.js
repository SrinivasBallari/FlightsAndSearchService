const { city } = require('../models/index');

class CityRepo{

    async createCity({ name }){
        try {
            const createdCity = await city.create({
                name : name
            });
            return createdCity;
        } catch (error) {
            console.log(`Error creating city : ${name}`);
            throw({error});
        }
    }

    async deleteCity(cityId){
        try {
            await city.destroy({
                where:{
                    id : cityId
                }
            });
            return true;
        } catch (error) {
            console.log(`Error deleting city with id: ${cityId} `);
            throw({error});
        }
    }

    async readCity(cityId){
        try {
            const foundCity = await city.findByPk(cityId);
            return foundCity;          
        } catch (error) {
            console.log(`Error finding city with id : ${cityId} `);
            throw({error})
        }
    }

    async updateCity(cityId, data){
        try {
            const searchedCity = await city.findByPk(cityId);
            searchedCity.name = data.name;
            await searchedCity.save();
            return searchedCity;                
        } catch (error) {
            console.log(`Error finding city with id : ${cityId}`);
            throw({error});
        }
    }
}

module.exports = CityRepo;