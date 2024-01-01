const { airport } = require('../models/index');

class AiportRepo{

    async create({name , address, cityId}){
        try {
            const response = await airport.create({
                name: name,
                address: address,
                cityId: cityId
            });
            return response;
        } catch (error) {
            console.log('Error in Airport Repo layer', error);
            throw({error});
        }
    }

    async read(id){
        try {
            const response = await airport.findByPk(id);
            return response;
        } catch (error) {
            console.log('Error in Airport Repo layer', error);
            throw({error});
        }
    }
}

module.exports = AiportRepo;