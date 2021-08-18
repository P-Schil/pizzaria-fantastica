const { response } = require('express');
var express = require('express');
var router = express.Router();

// const SalvaVisitadasMiddleware = require('../middlewares/SalvaVisitadasMiddleware')
const AdminController = require ('AdminController')
router.get('/admin/login')



// const PizzasController = require('../controllers/PizzasController');

/* GET home page. */
// router.get('/', PizzasController.index);
// router.get('/pizzas/create', PizzasController.create);
// router.post('/pizzas/create',uploadDeFotoDePizza.single('img'), PizzasController.store);
// router.get('/pizzas/:id',SalvaVisitadasMiddleware, PizzasController.show);
// router.get('/busca', PizzasController.busca);

// module.exports = router;