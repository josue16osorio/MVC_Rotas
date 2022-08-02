const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/produtosController');



router.get('/',(req,res)=>{
    res.send("Página Inicial do meu Site")
})
// ROTA DE PRODUTOS
// router.get('/produtos',(req,res)=>{
//     res.send("Página de Produtos");
// })

router.get('/produtos',ProdutoController.criarProduto);
router.get('/deletar/:id',ProdutoController.deletarProduto);





module.exports = router;