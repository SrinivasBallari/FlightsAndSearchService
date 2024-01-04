const CrudRepo = require('./crudRepo');
const { city } = require('../models/index');
const { Op } = require('sequelize');

class CityRepo extends CrudRepo{

    constructor(){
        super(city);
    }

    async readAll(queryFilter){
        try {
            if(queryFilter.name){
                const cities = await city.findAll({
                    where:{
                        name: {
                            [Op.startsWith] : queryFilter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await city.findAll();
            return cities;
        } catch (error) {
            console.log(`Error finding all cities`);
            throw({error});
        }
    }

    async createAll(cities){
        try {
            const createdCities = await city.bulkCreate(cities);
            return createdCities;
        } catch (error) {
            console.log(`Error creating all cities`);
            throw({error});
        }
    }
}

module.exports = CityRepo;