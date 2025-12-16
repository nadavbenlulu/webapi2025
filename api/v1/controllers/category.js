const obj={
getALLcategory:(req,res)=>{
   
       return res.status(200) .json({msg:"all category"});
    },
    addNewcategory:(req,res)=>{
   
       return res.status(200) .json({msg:"new category"});
    },
    addcategoryById:  (req,res)=>{

     return res.status(200) .json({msg:"new category by id"});
    },    
    updatecategoryById: (req,res)=>
 {return res.status(200).json({msg:`get new category ${req.params.id}`});        
},
deletecategoryById: (req,res)=>{
    
      return  res.status(200).json({msg:`Delete  category  ${req.params.id}`});
    } ,
    getcategorybyid: (req,res)=>{
    
      return  res.status(200).json({msg:`get category by id'  ${req.params.id}`});
    } ,
}
module.exports=obj