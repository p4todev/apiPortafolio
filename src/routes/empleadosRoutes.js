const {Router} = require('express');
const router = Router();
const BD = require('../config/config.js');

//traer datos 

router.get('/empleados', async(req,res)=>{

    sql = "SELECT id_persona_empleado, contraseña  FROM empleados;";

    let  result = await BD.Open(sql,[],false);
    let Results = [];


    //TODO: se debe generar una query donde tome id, nombre, pw, tipo_empleado
    result.rows.map(empleado=>{
        let schema = {
            "id" : empleado[0],
            "contrasena" : empleado[1],
        
        }

        Results.push(schema);
    })

    res.json(Results);

})

module.exports = router;