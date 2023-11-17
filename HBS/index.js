const express = require('express');
const hbs = require('hbs'); //Para incorporar motor de plantillas
const path = require('path'); //Trabaja con rutas

const app = express();

const port = 8383;

app.use(express.static('public'));

app.set('views', path.join(__dirname + '/public/views')); //Asignar la hubicación de los archivos HBS
app.set('view engine', 'hbs'); //Ingeniería de vista: HBS

//Configurar los directorios guardados partials: HBS
hbs.registerPartials(__dirname + '/public/views/partials');

app.get('/', (req, res) => {
    res.render('index', {
        "Nombre":"Darwin alexander",
        "Email":"darwincanas16@gmail.com"
    }); //Render es obligatorio cuando utilizamos HBS y podemos solo poner el nombre del archivo
});

app.get('/productos', (req, res) => {
    res.render('productos');
});

app.get('/contacto', (req, res) => {
    res.render('contacto');
});
//rurtas de las vistas
app.get('/categoriaServicios', (req, res) => {
    res.render('categoriaServicios');
});

app.get('/gestionServicios', (req, res) => {
    res.render('gestionServicios');
});



app.get('*', (req, res) => {
    res.render(__dirname + '/public/views/404.hbs'); //O podemos definir la ruta entera
});

app.listen(port, () => {
    console.log(`Listen to port: ${port}`);
});

