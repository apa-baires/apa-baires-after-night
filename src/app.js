const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
//const session = require('express-session’);
//const ErrorMiddleware = require('./middlewares/ErrorMiddleware’);

const mainRouters = require('./routes/main.js');
//const apaClubRouters = require('./routes/apaClub.js');
const usersRouter = require('./routes/users.js');
const productsRouter = require('./routes/products.js');
// const enterpriseRouter = require('./routes/enterprises.js');
// const apiOwnerRouter = require('./routes/apiOwners.js');
// /*const searchRouter = require('./routes/searchRoutes.js');*/
// const gameAIRouter = require('./routes/gameAIRoutes.js');
// const staffRouter = require('./routes/staffRoutes.js');
// Enrutador
const app = express();
//app.use(ErrorMiddleware);   // Opcional. Aplicar middleware a nivel aplicación
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.resolve(__dirname + '/public')));
app.use(express.static(path.resolve(__dirname + '/views')));

//app.use(session( {secret: "Este es mi secreto"} ));    // para definir que vas a utilizar información en sesión
app.use(express.urlencoded({ extended: false })); // Para especificar que vamos a transferir información por el body en peticiones

app.use(express.json()); // Para especificar que vamos a transferir información por el body en peticiones

app.use(methodOverride('_method')); // Para poder utilizar PUT o DELETE sobreescribiendo el método POST

// /**************define end points***************/
app.use('/', mainRouters);
//app.use('/apaClub', apaClubRouter);
app.use('/usuarios', usersRouter);
app.use('/telos', productsRouter);
//app.use('/empresas', enterpriseRouter);
//app.use('/ApaOwners', apiOwnerRouter);
//app.use('/search', searchRouter);
//app.use('/ApaGame', gameAIRouter);
//app.use('/staff', staffRouter);
/***********Server listen 3030****** */

app.listen(process.env.PORT || 3022, function() {
	console.log('Servidor corriendo PORT 3022');
}); // para levantar el servidor en un puerto especifico

module.exports = app;
