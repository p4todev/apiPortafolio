const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();


const BD = require('../src/config/config')

console.log(BD)

//imports

const testRoutes = require('../src/routes/platosRoutes');

//settings

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use(testRoutes);




app.listen(3000, ()=>{
    console.log('se conecto al puerto 3000');
});

