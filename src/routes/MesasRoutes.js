const {Router} = require('express');
const router = Router();
const BD = require('../config/config');

//traer los datos de la mesa..
router.get('/Mesas', async(req,res)=>{
    
    sql = "select id_mesa from mesa";

    let result = await BD.Open(sql,[],false);
    Results = [];

    result.rows.map(mesa=>{
        let schema = {
            "id_mesa" : mesa[0],
        }

        Results.push(schema);
    })

    res.json(Results);

});

module.exports = router;