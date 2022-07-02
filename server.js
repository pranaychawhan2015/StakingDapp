require('dotenv').config();
const express= require('express')
const app =express()
const routes = require('./routes')
const Web3 = require('web3');
const StakingToken = require("./contracts/stakeToken.json");

//const mongodb = require('mongodb').MongoClient
//const contract = require('truffle-contract');
app.use(express.json())

// mongodb.connect(process.env.DB,{ useUnifiedTopology: true },(err,client)=>{
    //const db =client.db('Cluster0')
    //home
    app.listen(process.env.PORT || 8082, () => {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
        const networkId = await window.web3.eth.net.getId();
        const deployedNetwork = StakingToken.networks[networkId];
        const myContract = new window.web3.eth.Contract(
            StakingToken.abi,
            deployedNetwork && deployedNetwork.address,
        );
        
        myContract.events.MyEvent({})
    .on('data', async function(event){
        console.log(event.returnValues);
        // Do something here
    })
    .on('error', console.error)
        console.log('listening on port 8082');
     })
     routes(app, myContract)
//})
