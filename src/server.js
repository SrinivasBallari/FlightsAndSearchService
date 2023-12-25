const express = require('express');
const {PORT} = require('./config/serverConfig');

async function setupAndStartServer(){
    const app = express();
    app.listen(PORT, () => {
        console.log(`server started on ${PORT}`);
    });
}

setupAndStartServer();
