const {Router} = require('express');
const router = Router();
const BD = require('../config/config.js');

//traer datos 

router.get('/empleados', async (req,res)=>{

    sql = "SELECT contraseña FROM persona_empleado";

    let result = await BD.Open(sql,[],false);
    Results = [];


    //TODO: se debe generar una query donde tome id, nombre, pw, tipo_empleado
    result.rows.map(empleado=>{
        let schema = {
            "contrasena" : empleado[0],
        }

        Results.push(schema);
    })

    res.json(Results);

})

module.exports = router;