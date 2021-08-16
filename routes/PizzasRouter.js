var express = require('express');
var router = express.Router();
const multer = require('multer')
const armaznamento = multer.diskStorage({
    destination :(req,file,cb)=>{
        cb(null, '.public/img/')
    },
    filename: (req,file,cd)=>{
        cb(null,Date.now()+ '-'+ file.originalname)
    }
})

const PizzasController = require('../controllers/PizzasController');
const uploader = require('');

/* GET home page. */
router.get('/', PizzasController.index);
router.get('/pizzas/create',upload.single('img'), PizzasController.create)
router.post('/pizzas/create', PizzasController.store)
router.get('/pizzas/:id', PizzasController.show);
router.get('/busca/', PizzasController.busca);



module.exports = router;
