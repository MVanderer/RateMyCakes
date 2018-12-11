const mongoose = require('mongoose');
require('../models/cake.js');
const Cake = mongoose.model('Cake');
const Rating = mongoose.model('Rating');

module.exports = {
    returnAllCake:(req,res)=>{
        console.log('Requesting all');
        Cake.find({},function(error,cake){
            if (error){res.json(error);}
            else {res.json(cake);}
        });
    },

    returnOneCake:(req,res)=>{
        console.log('Requesting one');
        Cake.findOne({_id:req.params.id},function(error,cake){
            if (error){res.json(error);}
            else {
                let avgRat = 0;
                for (let rating of cake.ratings){
                    avgRat+=rating.rating;
                }
                avgRat=avgRat/cake.ratings.length;
                res.json(cake);
            }
        });
    },

    postNewCake:(req,res)=>{
        console.log('Posting a new one');
        let cake = new Cake(req.body);
        cake.save((err)=>{
            if (err){res.json(err);}
            else {res.json({message:"Created"});}
        })
    },

    updateOneCake:(req,res)=>{
        Cake.updateOne({_id:req.params.id},{
            completed:req.body.completed,
            title:req.body.title,
            description:req.body.description,
        },(err,raw)=>{
            if (err){res.json(err);}
            else {res.json(raw);}
        });
    },

    destroyOneCake:(req,res)=>{
        console.log('Remove one by id');
        Cake.findOneAndDelete({_id:req.params.id},(err,result)=>{
            if (err){res.json(err);}
            else {
                console.log(result);
                res.json({message:"Deleted"});
            }
        });
    },
    postNewComment:(req,res)=>{
        console.log("Making a comment");
        console.log(req.body);
        console.log(req.params.id)
        Rating.create(req.body,(error,rating)=>{
            if (error) {
                res.json(error);
            }
            else {
                Cake.findByIdAndUpdate(req.params.id,{$push:{ratings:rating}},(err,cake)=>{
                    if (err) {
                        res.json(err);
                    }
                    else {
                        console.log("Successfully commented");
                        res.json({success:"Comment added"});
                    }
                });
            }
        });
    },

    pullAllComments:(req,res)=>{
        Cake.findById(req.params.id).populate('ratings').exec((err,cake)=>{
            if (err){res.json(err)}
            else {
                let avg =0;
                for (rate of cake.ratings){
                    avg+=rate.rating;
                }
                avg = avg/cake.ratings.length;
                res.json({ratings:cake.ratings,avg:avg});
            }
        });
    },

}