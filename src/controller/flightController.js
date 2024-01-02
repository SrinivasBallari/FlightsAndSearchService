const{ FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async (req,res) =>{
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            Message : "Success",
            data: flight,
            error : {},
        })
    } catch (error) {
        console.log("Error in controller ",error);
        return res.status(500).json({
            Message: "Failed",
            data: {},
            error: error
        });        
    }
}

module.exports = {
    create
}