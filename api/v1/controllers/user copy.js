const user = require("../models/user");

const obj={
getALLuser:(req,res)=>{
     User.find().then((data)=>{
         return res.status(200).json(data);
      });
    },

    addNewuser:(req,res)=>{
     const uid = req.body.uid;
     User.find({ uid: uid }).then((data) => {
       if (data.length > 0) {
         return res
           .status(200)
           .json({ message: `user id ${uid} already exist` });
       } else {
         User.insertOne(req.body).then((use) => {
           return res.status(200).json(use);
         });
       }
     });
    },

    adduserById:  (req,res)=>{
 const uid=req.params.id;
      User.insertOne(req.body).then((use)=>{
         return res.status(200).json(use);
      });
    },    
    updateuserById: (req,res)=>{
        const uid=req.params.id;
             User.updateOne({uid},req.body).then((use)=>{
                return res.status(200).json(use);
             });

},

deleteuserById: (req,res)=>{
     const uid=req.params.id;
          User.deleteOne({uid}).then((use)=>{
             return res.status(200).json(use);
          });
      
    } ,

    getuserbyid: (req,res)=>{
      const id=req.params.id;
          User.find({uid:id}).then((use)=>{
             return res.status(200).json(use);
          });
    
    } ,
}
module.exports=obj