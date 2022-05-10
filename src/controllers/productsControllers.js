const fs = require('fs')
const path = require('path')
    //REQUIRE PATH, READ FILE and SYNC JSON DOCUMENT
const comunasFilePath = path.join(__dirname, '../data/comunasDB.json')
const localsDBFilePath = path.join(__dirname, '../data/localsDB.json')
    //JSON OBJECT --> JS OBJECT
const comunas = JSON.parse(fs.readFileSync(comunasFilePath, 'utf-8'));
const localsDB = JSON.parse(fs.readFileSync(localsDBFilePath, 'utf-8'));

let controller = {
	landingProductos: (req, res) => {
		res.render('products/detalles', {
			title: 'PRODUCTOS - CABA',
		});
	},
	getByID: (req, res) => {
		let idP = req.params.idP;
		res.render('products/productsById', {
			title: 'detalles local #' + idP,
		});
	},
	comunasP: (req, res) => {
        let comunaID = req.params.comunaID
        res.render('products/productos_ofComuna', {
            title: 'Comuna ' + comunaID
        })
    },
    CABA: (req, res) => {
        res.render('products/comunaLocales', {
            title: 'APA BAIRES' ,
            localsDB: localsDB
        })
    }
};
module.exports = controller
