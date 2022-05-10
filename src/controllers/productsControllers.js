const fs = require('fs')
const path = require('path')
    //REQUIRE PATH, READ FILE and SYNC JSON DOCUMENT
const comunasFilePath = path.join(__dirname, '../data/comunasDB.json')
const localsFilePath = path.join(__dirname, '../data/localsDB.json')
    //JSON OBJECT --> JS OBJECT
const comunasDB = JSON.parse(fs.readFileSync(comunasFilePath, 'utf-8'));
const localsDB = JSON.parse(fs.readFileSync(localsFilePath, 'utf-8'));
let controller = {
    createTelos: (req, res) => {
        let comunaID = req.params.comunaID
        res.render('products/productosComuna', {
            title: 'Comuna ' + localsDB
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
    detailsByIdC: (req, res)=>{
        let idC = req.params.idC
        res.render('products/productosComuna', {title:'COMUNA #' + idC})
    },
    detailsByIdE: (req, res)=>{
        let idE= req.params.name;
        res.redirect('usuarios/cadastro')
    }
}
module.exports = controller