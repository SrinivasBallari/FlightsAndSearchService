const { ClientErrorCodes } = require("../utils/errorCodes");

const validateFlightCreation = (req, res, next) =>{
    
    if(
        !req.body.flightNumber || 
        !req.body.airplaneId || 
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price 
    ){
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Invalid request body for flight creation',
            err: 'Missing required properties to create a flight'
        })
    }

    next();
}

module.exports = {
    validateFlightCreation
}