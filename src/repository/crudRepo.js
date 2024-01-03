class CrudRepo {
    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            await this.model.create(data);
            return true;    
        } catch (error) {
            console.log("Error occured in crudrepo");
            throw({error});
        }
    }

    async read(id){
        try {
            const response = await this.model.findByPk(id);
            return response;
        } catch (error) {
            console.log("Error occured in crudrepo");
            throw({error});
        }
    }

    async readAll(){
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            console.log("Error occured in crudrepo");
            throw({error});
        }
    }

    async update(id, data){
        try {
            const response = await this.model.update(data,{
                where:{
                    id: id
                }
            });
            return response;
        } catch (error) {
            console.log("Error occured in crudrepo");
            throw({error});
        }
    }

    async destroy(id){
        try {
            const response = await this.model.destroy({
                where:{
                    id: id
                }
            });
            return response;
        } catch (error) {
            console.log("Error occured in crudrepo");
            throw({error});
        }
    }
}

module.exports = CrudRepo;