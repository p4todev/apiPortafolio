const {Router} = require('express')
const router = Router();
const BD = require('../config/config.js');

//traer datos
router.get('/test', async(req,res)=>{
    sql = "SELECT * FROM platillo";

    let result = await BD.Open(sql,[],false);
    Results = [];

    result.rows.map(test=>{
        let schema = {
            "id" : test[0],
            "nombre" : test[1],
            "activo" : test[2],
            "tipo_pe" : test[3],
            "tipo_pro" : test[4],
            "tipo_an" : test[5],
            "receta" : test[6],
            "stock" : test[7]
        }

        Results.push(schema);

    })

    res.json(Results);
})

//enviar pedido
router.post('/test', async (req,res)=>{
    //TODO: se debe ingresar los pedidos de testeo, 
    // este metodo debe ingresar los datos mas relevantes
    //para realizar pruebas
});


module.exports = router;