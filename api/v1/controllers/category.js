//const mongoose=require('mongoose');
const Category=require('../models/category');
const mysql = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'nadav',
  password : '1234',
  database : 'ecommdb'
});
 
connection.connect((err)=>{
    if (err==null)
        console.log('good MySql connection')
    else
        console.log(err);
});


const obj={
getALLcategory:(req,res)=>{
   let sql="select* from t_category ";
connection.promise().query(sql).then((results)=>{
    return res.status(200).json(results[0]);
   })
    },
    addNewcategory:
 (req, res) => {
  const cid = req.body.cid;
 let sql = `INSERT INTO t_category (cid,catname)
             VALUES ('${cat.cid}', '${cat.catname}')`;
  connection.promise()
    .query(sql)
    .then((results) => {
      return res.status(200).json(results[0]);
      });
    },
  
    addcategoryById:  (req,res)=>{
 const cid=req.params.id;
      Category.insertOne(req.body).then((cat)=>{
         return res.status(200).json(cat);
      });
    },   
    updatecategoryById: (req,res)=>
 {
        const cid=req.params.id;
            const cat=req.body;
       let sql=`update t_category set cid='${cat.cid}',catname= ${cat.catname} where pid=${pid}`;
connection.promise().query(sql).then((results)=>{
    return res.status(200).json(results[0]);
              })   
},
deletecategoryById: (req,res)=>{
    const cid=req.params.id;
             let sql=`delete  from t_category where pid=${pid} `;
connection.promise().query(sql).then((results)=>{
    return res.status(200).json(results[0]);
          });
    } ,
    getcategorybyid: (req,res)=>{
     const id=req.params.id;
      let sql=`select* from t_category where pid=${pid} `;
   connection.promise().query(sql).then((results)=>{
         return res.status(200).json(results[0]);
          })
      
    } ,
}
module.exports=obj