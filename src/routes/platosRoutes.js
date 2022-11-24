const {Router} = require('express')
const router = Router();
const BD = require('../config/config.js');

//traer datos
router.get('/platos', async(req,res)=>{

    sql = "SELECT ID_PLATO,NOMBRE,PRECIO,FOTO FROM PLATO WHERE FOTO IS NOT NULl";

    let result = await BD.Open(sql,[],false);
    Results = [];

    result.rows.map(test=>{
        let schema = {
            "ID_PLATO" : test[0],
            "NOMBRE" : test[1],
            "PRECIO" : test[2],
            "FOTO" : test[3],
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