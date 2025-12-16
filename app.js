require('dotenv').config;// הפעלת פונקציה שמשלבת את משתנה הסביבה מתוך הקובץ dotinit


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

//רישום ראוטרים באפךיקצייה
app.use('/product',productrouter);//שילוב הראוטר בתוך האפליקצייה 
app.use('/order',orderRouter);
app.use('/user',userRouter);
app.use('/category',categoryRouter);
module.exports=app;

//התחברות לענן מונגו 
const mongoConstr='mongodb+srv://${mongoUser}:${mongoPass}@${mongoServer}/?appName=Cluster0';
console.log(mongoConstr);
const mongoUser=process.env.MONGO_USER;//קישור ל env לשם משתמש 
const mongoPass=process.env.MONGO_PASS;//קישור לסיסמה
const mongoServer=process.env.MONGO_SERVER;//קישור לשרת 