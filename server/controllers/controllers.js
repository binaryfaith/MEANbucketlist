var mongoose = require('mongoose');
var User = mongoose.model('User');
var Bucket = mongoose.model('Bucket');

module.exports = {
        login: function (req, res) {
            User.findOne({name: req.body.name}, (err, user) => {
                if(err){
                    return res.status(401).json(err)
                }
                else if(user){
                    req.session.user = user
                    res.redirect('/dashboard')
                }
                else{
                    var newuser = new User(req.body);
                    newuser.save((err) => {
                        if(err){
                            return res.status(401).json(err);
                        }
                        else{
                            console.log(`${newuser} has been saved`)
                            req.session.user = newuser;
                            res.redirect('/dashboard')
                        }
                    })
                }
            })
        },

        submitcreate:function(req,res){
            var newbucket = new Bucket(req.body)
            console.log(req.session)
            newbucket._creator = req.session.user._id
            console.log(newbucket)
            newbucket.save((err) => {
                if(err){
                    return res.status(401).json(err);
                }
                else{
                    console.log(`${newbucket} has been saved`)
                    res.redirect('/dashboard')
                }
            })
        },

        mybucket:function(req,res){
            Bucket.find().populate('_creator').populate('tagged').exec(function(err,result){
                if(err){
                  res.json(err);
                }else{
                  res.json(result);
                }
              })
            },

            check:function(req,res){
                list.findOne({_id:req.params.id},function(err,result){
                  if(err){
                    console.log(err);
                  }else{
                    result.status = "1";
                    result.save(function(err,result){
                      if(err){
                        console.log(err)
                      }else{
                      }
                    })
                  }
                })
              },
              uncheck:function(req,res){
                list.findOne({_id:req.params.id},function(err,result){
                  if(err){
                    console.log(err);
                  }else{
                    result.status = "0";
                    result.save(function(err,result){
                      if(err){
                        console.log(err)
                      }else{
                      }
                    })
                  }
                })
              },
        delete: function(req, res) {
            Appointment.remove({_id: req.body.id}, function(err){
                if (err){
                    console.log(err);
                }
            });
        }
    

}


    
   