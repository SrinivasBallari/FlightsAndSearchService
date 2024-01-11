const{ FlightService } = require('../services/index');
const { SuccessCodes, ServerErrorCodes } = require('../utils/errorCodes');

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
        return res.status(SuccessCodes.CREATED).json({
            Message : "Success",
            data: flight,
            error : {},
        });
    } catch (error) {
        console.log("Error in controller ",error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            Message: "Failed Not able to create flights",
            data: {},
            error: error
        });        
    }
}

const getAll = async (req,res) => {
    try {
        const response = await flightService.readAll(req.query);
        return res.status(SuccessCodes.OK).json({
            Message : "Successfully fetched the flights",
            data: response,
            error : {},
        });
    } catch (error) {
        console.log("Error in controller ",error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            Message: "Failed, Not able to fetch the flights",
            data: {},
            error: error
        });
    }
}

const get = async (req,res) => {
    try {
        const response = await flightService.read(req.params.id);
        return res.status(SuccessCodes.OK).json({
            Message : "Successfully fetched the flight",
            data: response,
            error : {}
        });
    } catch (error) {
        console.log("Error in controller ",error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            Message: "Failed, Not able to fetch the flight",
            data: {},
            error: error
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await flightService.update(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            Message : "Successfully updated the flight",
            data: response,
            error : {}
        });
        
    } catch (error) {
        console.log("Error in controller ",error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            Message: "Failed, Not able to update the flight",
            data: {},
            error: error
        });
    }
}

module.exports = {
    create,
    getAll,
    get,
    update
}