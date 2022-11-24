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
        //TODO: se debe mejorar la consulta para que obtenga
        //los datos (rut,contrasena) esto se debe verificar
        //para realizar el inicio de sesion
        let schema = {
            "rut " : empleado[0],
            "contrasena" : empleado[1],

        }

        Results.push(schema);
    })
    res.json(Results);
})



module.exports = router;