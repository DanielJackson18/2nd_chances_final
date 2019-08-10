const db = require('../models');


module.exports = function(app){

    
    app.get('/api/all', (req, res) => {
        db.Animals.findAll({}).then(dbAnimals => {
            res.json(dbAnimals);
        })
    });
    
    
    app.get('/api/animals/type/:type', (req, res) => {
        db.Animals.findAll({
            where: {
                type: req.params.type
            }
        }).then(result => {
            res.json(result);
        });
    });

    
    app.post('/api/animals/:type', (req, res) => {
        db.Animals.findOne({
            where: {
                id: req.params.id
            }
        }).then(dbAnimals => {
            res.json(dbAnimals);
        });
    });

    
    app.put('/api/animals', (req, res) => {
        db.Animals.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(dbAnimals => {
            res.json(dbAnimals);
        })
    });
};



