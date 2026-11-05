const express=require('express');
const path=require('path');
const app=express()
const PORT=3001;

app.use(express.urlencoded({extended: true}))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'formulario.html'));
})
app.get('/registro-get',(req,res)=>{
    console.log(req.query)
    const {nombre,apellido,edad,correo,programa}=req.query
    res.send(`
        <div style="font-family: Arial; padding: 20px; max-width: 500px; margin: auto;
         background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 0 10px rgba(252, 0, 0, 0.1);">
        <h1 style="color: #333; font-size: 24px; margin-bottom: 10px;">Datos Recibidos</h1>
        <p>Nombre: ${nombre}</p>
        <p>Apellido: ${apellido}</p>
        <p>Edad: ${edad}</p>
        <p>Correo: ${correo}</p>
        <p>Programa: ${programa}</p>
        <br>
        <div style="margin-top: 20px;">
        <button onclick="window.location.href='/'">Volver al Formulario</button>
        </div>
        </div>
        `)

})

app.get('/unisimon',(req,res)=>{
    res.send('Respuesta desde el sitio de la Unisimon.')
})
app.post('/registro-post',(req,res)=>{
    console.log(req.body)
    const {nombre,apellido,edad,correo,programa}=req.body
    res.send(`
        <div style="font-family: Arial; padding: 20px; max-width: 500px; margin: auto;
         background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <h1 style="color: #333; font-size: 24px; margin-bottom: 10px;">Datos Recibidos</h1>
        <p>Nombre: ${nombre}</p>
        <p>Apellido: ${apellido}</p>
        <p>Edad: ${edad}</p>
        <p>Correo: ${correo}</p>
        <p>Programa: ${programa}</p>
        <br>
        <div style="margin-top: 20px;">
            <button onclick="window.location.href='/'">Volver al Formulario</button>
        </div>
        </div>
        `)
})
//iniciamos el servidor
app.listen(PORT,()=>{
    console.log(`Sevidor ejecutándose en el puerto http://localhost:${PORT}`)
})