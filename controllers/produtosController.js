const ProdutoController = {
    criarProduto: (req,res)=>{
        res.send("Criando um Produro")
    },

    deletarProduto: (req,res)=>{
        const {id}= req.params;
        res.send("Deletando um produto: "+id);
    }
}




module.exports = ProdutoController;