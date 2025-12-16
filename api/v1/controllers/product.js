const obj={
getALLProduct:(req,res)=>{
   
       return res.status(200) .json({msg:"all prodcuts"});
    },
    addNewProduct:(req,res)=>{
   
       return res.status(200) .json({msg:"new prodcuts"});
    },
    addProductById:  (req,res)=>{

     return res.status(200) .json({msg:"new product by id"});
    },    
    updateProductById: (req,res)=>
 {return res.status(200).json({msg:`get new product ${req.params.id}`});        
},
deleteProductById: (req,res)=>{
    
      return  res.status(200).json({msg:`Delete  product  ${req.params.id}`});
    } ,
    getproductbyid: (req,res)=>{
    
      return  res.status(200).json({msg:`get product by id'  ${req.params.id}`});
    } ,
}
module.exports=obj