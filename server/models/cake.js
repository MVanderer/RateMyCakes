let mongoose = require('mongoose');

let RatingSchema = new mongoose.Schema({
    author:{type:String,required:true,minlength:2,maxlength:50},
    comment:{type:String,maxlength:300},
    rating:{type:Number,required:true}
},{timestamps:true});

let CakeSchema = new mongoose.Schema({
    baker:{type:String,required:true,minlength:2},
    name:{type:String,required:true,minlength:5},
    url:{type:String,required:true,validate:{
        validator:function(val){
            let re = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;
            return re.test(String(val).toLowerCase());
        }
    }},
    ratings:[RatingSchema],
},{timestamps:true});

mongoose.model('Cake',CakeSchema);
mongoose.model('Rating',RatingSchema);