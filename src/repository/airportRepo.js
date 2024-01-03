const { airport } = require('../models/index');
const CrudRepo = require('./crudRepo');

class AiportRepo extends CrudRepo{

    constructor(){
        super(airport);
    }
    
}

module.exports = AiportRepo;