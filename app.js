// פה כל הקוד של השרת מגדיר אותו  
const express=require('express');// חיבור לספריית אקספרס
const { pid } = require('process');
const app=express();// יצירת מופע של אפלקיציית  השרת 
const productrouter=require('./api/v1/routes/product');
const orderRouter=require('./api/v1/routes/order');
const categoryRouter=require('./api/v1/routes/category');
const userRouter=require('./api/v1/routes/user');
const morgan=require('morgan');//קישור לספריית מורגן לניטור בקשות http 
const ipFilter=require('./api/v1/middelwares/ipFilter');
app.use(morgan('dev'));//שימוש במורגן לניטור בקשות http בפורמט פיתוח 


//app.use(ipFilter);
// const secure=(req,res,next)=>{
//     console.log('i am secure midelware ${req.method}');
//     next();
//     //res.status(401).json({msg:'you are not authorized'})

// };
// app.use(secure);

// const logger=(req,res,next)=>{

// };
// app.use(logger);

//רישום ראוטרים באפךיקצייה
app.use('/product',productrouter);//שילוב הראוטר בתוך האפליקצייה 
app.use('/order',orderRouter);
app.use('/user',userRouter);
app.use('/category',categoryRouter);
//הגדרת שכבה אחרונה שתשמש עבור הודעת 404 שגיאה
// app.use((res,req)=>{
//     res.status(404).json({msg:'path not found'})
// });

    
    //res.status(401).json({msg:'you are not authorized'})

//http://localhost:5050/product

//
module.exports=app;