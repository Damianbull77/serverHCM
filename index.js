const express = require('express')
const app = express();
const PORT = 8082; 
const cors = require('cors')
const routes = require('./routes/api')
const mysql = require('mysql2')

app.use(cors())
app.use(express.static('imagenes'))

const conection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin2023*',
    database: 'deprod',
    insecureAuth: true
    
});

conection.connect((error)=>{
    if(error){
        console.log('error de conexion ',error)
    }else{console.log('conexion establecida')}
})

conection.query('DESC HABITACIONES', (error, results, fields)=>{
    if(error){console.log(error)};

    console.log(results);
})

conection.end();

app.use('/api',routes)



app.listen(PORT, ()=>{
    console.log('`Servidor backend corriendo en http://localhost:${PORT}`')
});