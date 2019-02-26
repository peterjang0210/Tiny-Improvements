const Kudo = require("../models/Kudo");
const User = require("../models/User");

module.exports = function (app){
    app.get("/api/kudos", function(req, res){
        Kudo.find()
        .populate("sender")
        .populate("receiver")
        .then(function(kudos){
            res.json(kudos);
        })
        .catch(function(error){
            res.json({error: error});
        });
    });

    app.get("/api/users", function(req, res){
        User.find().then(function(users){
            res.json(users);
        }).catch(function(error){
            res.json({error:error});
        });
    });

    app.post("/api/kudos", function(req, res){
        Kudo.create(req.body).then(function(kudos){
            res.json(kudos)
        }).catch(function(error){
            res.json({error:error});
        });
    });
}