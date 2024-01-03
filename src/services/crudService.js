class CrudService{
    constructor(repo){
        this.repo = repo;
    }

    async create(data){
        try {
            const response = await this.repo.create(data);
            return response;
        } catch (error) {
            console.log("Error occured in crud service");
            throw({error});
        }
    }

    async read(id){
        try {
            const response = await this.repo.read(id);
            return response;
        } catch (error) {
            console.log("Error occured in crud service");
            throw({error});
        }
    }

    async readAll(){
        try {
            const response = await this.repo.readAll();
            return response;
        } catch (error) {
            console.log("Error occured in crud service");
            throw({error});
        }
    }

    async update(id, data){
        try {
            const response = await this.repo.update(id, data);
            return response;
        } catch (error) {
            console.log("Error occured in crud service");
            throw({error});
        }
    }

    async destroy(){
        try {
            
        } catch (error) {
            console.log("Error occured in crud service");
            throw({error});
        }
    }
}

module.exports = CrudService;