const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');

async function setupAndStartServer(){

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.listen(PORT, () => {
        console.log(`server started on ${PORT}`);
    });
}

setupAndStartServer();