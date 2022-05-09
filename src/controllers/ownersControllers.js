

let controller = {
  loginOwners: (req,res)=>{
      res.render('apiOwners/sign-in')
  },
	homeOwners: (req, res) => {
		res.render('apiOwners/virtual-reality');
	},
	dashOwners: (req, res) => {
		res.render('apiOwners/dashboard');
	}
	/*formRooms: (req, res) => {
		let idP = req.params.idP;
		res.render('products/productsById', {
			title: 'detalles local #' + idP,
		});
	},*/
};
module.exports = controller;
