const pizzas = require ('../database/Pizzas.json')

module.exports = {
	index: (req, res)=>{
		res.render("index", {pizzas}); //pode ser só {pizzas} pois o nome que vc esta dando e do objeto são iguais
	},
	show: (req, res) =>{
		// res.send("salve" + req.params.id)
// 	}
// }
// passo 1 carregar pizzza com id passado pizzas.find
// passo 2 renderizar a view pizza passando a piza encontrada
// show: (req, res) => {
// 	var pizza = req.params.id;
	res.render("pizza")
	},
	busca:(req,res)=>{
		// res.send(req.query)
		const busca = req.query.busca;
		const encontradas = pizzas.filter(
			p=>p.nome == busca
			//função include e ver o maiusculo minusculo
			
		)
		res.render("index", {pizzas:encontradas})
	},
	create:(req,res)=>{
		res.render("pizza-create")
	},
	store:(req,res)=>{
		let pizza = {
			id:pizzas[pizzas.length - 1].id + 1,
			nome: req.body.nome,
			ingredientes: req.body.ingredientes.split(","),
			preco: req.body.preco,
			img:"/img/calabresa.jpg",
			destaque: true
		}
		//File System
		//const fs = require('fs');

	// res.render("pizza-create")
	pizza.push(pizza);
}
}
// busca:(req,res)=>{
// 	res.send(req.bbody.busca) se for POST