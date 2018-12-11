const cakes=require('../controllers/cakes.js')

module.exports = function(app){

    app.get('/cakes',function(req,res){
        cakes.returnAllCake(req,res);
    });

    app.get('/cakes/:id',function(req,res){
        cakes.returnOneCake(req,res);
    });

    app.post('/cakes',function(req,res){
        cakes.postNewCake(req,res);
    });

    app.put('/cakes/:id',function(req,res){
        cakes.updateOneCake(req,res);
    });

    app.delete('/cakes/:id',function(req,res){
        cakes.destroyOneCake(req,res);
    });

    app.post('/comment/:id',function(req,res){
        cakes.postNewComment(req,res);
    });

    app.get('/comment/:id',function(req,res){
        cakes.pullAllComments(req,res);
    });

}