const obj={
getALLuser:(req,res)=>{
   
       return res.status(200) .json({msg:"all user"});
    },
    addNewuser:(req,res)=>{
   
       return res.status(200) .json({msg:"new user"});
    },
    adduserById:  (req,res)=>{

     return res.status(200) .json({msg:"new user by id"});
    },    
    updateuserById: (req,res)=>
 {return res.status(200).json({msg:`get new user ${req.params.id}`});        
},
deleteuserById: (req,res)=>{
    
      return  res.status(200).json({msg:`Delete  user  ${req.params.id}`});
    } ,
    getuserbyid: (req,res)=>{
    
      return  res.status(200).json({msg:`get user by id'  ${req.params.id}`});
    } ,
}
module.exports=obj