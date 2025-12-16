const obj={
getALLorder:(req,res)=>{
   
       return res.status(200) .json({msg:"all order"});
    },
    addNeworder:(req,res)=>{
   
       return res.status(200) .json({msg:"new order"});
    },
    addorderById:  (req,res)=>{

     return res.status(200) .json({msg:"new order by id"});
    },    
    updateorderById: (req,res)=>
 {return res.status(200).json({msg:`get new order ${req.params.id}`});        
},
deleteorderById: (req,res)=>{
    
      return  res.status(200).json({msg:`Delete  order  ${req.params.id}`});
    } ,
    getorderbyid: (req,res)=>{
    
      return  res.status(200).json({msg:`get order by id'  ${req.params.id}`});
    } ,
}
module.exports=obj