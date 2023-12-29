const { CityService } = require('../services/index.js')

const cityService = new CityService();

const create = async (req , res)=>{
    try {
        const city = await cityService.createCity(req.body);

        return res.status(201).json({
            message : "Success",
            data : city,
            err : {}
        });
    } catch (error) {
        console.log("error in service " , error);
        return res.status(500).json({
            message: "Not able to create city",
            data: {},
            err : error
        });
    }
}

const destroy = async (req , res)=>{
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            message: "Success",
            data: response,
            err: {}
        });
    } catch (error) {
        console.log("error in service " , error);
        return res.status(500).json({
            message: "Not able to delete city",
            data: {},
            err : error
        });
    }
}

const read = async (req , res)=>{
    try {
        const response = await cityService.readCity(req.params.id);
        return res.status(200).json({
            message: "Success",
            data: response,
            err:{}
        });
    } catch (error) {
        console.log("error in service " , error);
        return res.status(500).json({
            message: "Not able to read city",
            data: {},
            err : error
        });
    }
}

const update = async (req , res)=>{
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            message: "Success",
            data: response,
            err:{}
        });
    } catch (error) {
        console.log("error in service " , error);
        return res.status(500).json({
            message: "Not able to update city",
            data: {},
            err : error
        });
    }
}

module.exports = {
    create,
    destroy,
    read,
    update
}