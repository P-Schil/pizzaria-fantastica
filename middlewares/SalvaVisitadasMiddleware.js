module.exports = (req,res,next)=>{
    console.log("pizza de id "+ req.params.id);

    let idPizzaDaVez = req.params.id;

    if(!req.cookies.visitadas){
        res.cookie('visitadas',idPizzaDaVez);
    }else{
        console.log("pizzas ja visitadas: "+req.cookies.visitadas)
        res.cookie('visitadas',`${req.cookies.visitadas},${idPizzaDaVez}`)
    }
    let visitadas = req.cookies.visitadas;
    // console.log("cookie de pizzas visitada:"+visitadas);
    // res.cookie('visitadas',req.params.id)
    next();
}