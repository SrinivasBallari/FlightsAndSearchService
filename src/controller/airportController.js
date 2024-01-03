const AirportService  = require("../services/airportService");

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            message: "Success",
            data: response,
            err:{}
        });
    } catch (error) {
        console.log("error in airport controller,", error);
        return res.status(500).json({
            message:"Could not create airport",
            data:{},
            err: error
        });
    }
};

const read = async (req, res) => {
    try {
        const response = await airportService.read(req.params.id);
        return res.status(201).json({
            message: "Success",
            data: response,
            err:{}
        });
    } catch (error) {
        console.log("error in airport controller,", error);
        return res.status(500).json({
            message:"Could not read airport",
            data:{},
            err: error
        });
    }
};

module.exports = {
    create,
    read
};
