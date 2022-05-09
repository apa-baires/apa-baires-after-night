let controller = {
	index: (req, res) => {
		res.render('index',
		{
			title: 'BIEN VENID@S'
		});
	},
};
module.exports = controller;
