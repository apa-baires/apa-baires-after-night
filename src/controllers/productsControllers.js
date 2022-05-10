const fs = require('fs')
const path = require('path')
    //REQUIRE PATH, READ FILE and SYNC JSON DOCUMENT
const comunasFilePath = path.join(__dirname, '../data/comunasDB.json')
const localsFilePath = path.join(__dirname, '../data/localsDB.json')
    //JSON OBJECT --> JS OBJECT
const comunasDB = JSON.parse(fs.readFileSync(comunasFilePath, 'utf-8'));
const p00 = JSON.parse(fs.readFileSync(localsFilePath, 'utf-8'));
let controller = {
    createTelos: (req, res) => {
        let comunaID = req.params.comunaID
        res.render('products/productosComuna', {
            title: 'Comuna ' + p00
        })
    },
    // detallesL: (req, res) => {
    //     let idRooms = req.params.idRooms
    //     res.render('products/detallesP', {
    //         title: 'Producto ' + idRooms,
    //     })
    // },
    homeTelos: (req, res) => {
        res.render('products/landingProducts', {
            title: 'PRODUCTOS - CABA',
            comunas: comunasDB
        })
    },
    comunasByIdC: (req, res)=>{
        res.render('products/products_section')
    }
}
module.exports = controller