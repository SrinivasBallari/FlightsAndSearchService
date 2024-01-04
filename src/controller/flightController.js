const{ FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async (req,res) =>{
    try {
        const flightRequestData = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
        });
        const flight = await flightService.create(flightRequestData);
        return res.status(201).json({
            Message : "Success",
            data: flight,
            error : {},
        });
    } catch (error) {
        console.log("Error in controller ",error);
        return res.status(500).json({
            Message: "Failed Not able to create flights",
            data: {},
            error: error
        });        
    }
}

const getAll = async (req,res) => {
    try {
        const response = await flightService.readAll(req.query);
        return res.status(200).json({
            Message : "Successfully fetched the flights",
            data: response,
            error : {},
        });
    } catch (error) {
        console.log("Error in controller ",error);
        return res.status(500).json({
            Message: "Failed, Not able to fetch the flights",
            data: {},
            error: error
        });
    }
}

module.exports = {
    create,
    getAll
}