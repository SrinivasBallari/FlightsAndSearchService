const {flight}  = require('../models/index');
const {Op} = require('sequelize');

class FlightRepo {

    #createFilter(data){
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }

        if(data.minPrice && data.maxPrice){
            Object.assign(filter, {
                [Op.and]: [
                    { price : {[Op.lte]: data.maxPrice} },
                    { price : {[Op.gte]: data.minPrice} }
                ]
            });
        }
        
        if(data.minPrice && !data.maxPrice){
            Object.assign(filter, {price : {[Op.gte]: data.minPrice} });
        }
        if(data.maxPrice && !data.minPrice){
            Object.assign(filter, {price : {[Op.lte]: data.maxPrice} });
        }
        return filter;
    }


    async createFlight(data){
        try {
            const createdFlight = await flight.create(data);
            return createdFlight;
        } catch (error) {
            console.log("Error in repository layer",error);
            throw(error);
        }
    }

    async getFlight(flightId){
        try {
            const fetchedFlight = await flight.findByPk(flightId);
            return fetchedFlight;
        } catch (error) {
            console.log("Error in repository layer",error);
            throw(error);
        }
    }

    async getAllFlights(filter){
        try {
            console.log(filter);
            const filterObject = this.#createFilter(filter);
            const flights = await flight.findAll({
                where: filterObject
            });
            console.log("fasdjfa",flights);
            return flights;
        } catch (error) {
            console.log("Error in repository layer",error);
            throw(error);
        }
    }

}

module.exports = FlightRepo;