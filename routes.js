const shortid = require('short-id')
const Web3 = require('web3');

function routes(app, myContract){
    app.post('/createToken/:name/:symbol', (req,res)=>{
        
    })
    app.get('/stakedTokens/:address', (req,res)=>{
        let email = req.body.email
        if(email){
            db.findOne({email}, (err, doc)=>{
                if(doc){
                    res.json({"status":"success","id":doc.id})
                }else{
                    res.status(400).json({"status":"Failed", "reason":"Not recognised"})
                }
            })
        }else{
            res.status(400).json({"status":"Failed", "reason":"wrong input"})
        }
    })
    app.get('/stakingRewards/:address', (req,res)=>{
        let buffer = req.body.buffer
        let name = req.body.name
        let title = req.body.title
        if(buffer && title){

        }else{
            res.status(400).json({"status":"Failed", "reason":"wrong input"})
        }
    })
    app.get('/usersData', (req,res)=>{
        if(req.params.id && req.params.email){


        }else{
            res.status(400).json({"status":"Failed", "reason":"wrong input"})
        }
    })
}
module.exports = routes
