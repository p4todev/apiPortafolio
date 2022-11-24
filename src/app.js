const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();


const BD = require('../src/config/config')

console.log(BD)

//imports

const testRoutes = require('../src/routes/platosRoutes');
//const empleados = require('../src/routes/empleadosRoutes');
const mesas = require('../src/routes/MesasRoutes')
//settings

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes 
app.use(testRoutes);
//app.use(empleados);
app.use(mesas);



app.listen(3000, ()=>{
    console.log('se conecto al puerto 3000');
});

