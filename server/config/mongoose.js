var path= require('path');
let fs = require('fs');

let mongoose = require('mongoose');

//connection to the database:
mongoose.connect('mongodb://localhost/rate_my_cakes');
mongoose.Promise = global.Promise;

let models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js')>=0){
        require(models_path + '/'+file);
    }
});