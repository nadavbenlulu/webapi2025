require('dotenv').config();// הפעלת פונקציה שמשלבת את משתנה הסביבה מתוך הקובץ dotinit

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
const mongoose=require('mongoose');// קישור לספריית מונגוס

//רישום ראוטרים באפךיקצייה
app.use(morgan('dev'));//שימוש במורגן לניטור בקשות http בפורמט פיתוח 
app.use(express.json());//הוספת שכבה לטיפול בבקשות בקידוד של גייסון
app.use(express.urlencoded());//הוספת שכבה לטיפול בבקשות עם גוף בקשה לקידוד של יוראל אנקודד
app.use('/product',productrouter);//שילוב הראוטר בתוך האפליקצייה 
app.use('/order',orderRouter);
app.use('/user',userRouter);
app.use('/category',categoryRouter);

const mongoUser=process.env.MONGO_USER;//קישור ל env לשם משתמש 
const mongoPass=process.env.MONGO_PASS;//קישור לסיסמה
const mongoServer=process.env.MONGO_SERVER;//קישור לשרת 
//התחברות לענן מונגו 
const mongoConstr=`mongodb+srv://${mongoUser}:${mongoPass}@${mongoServer}/?appName=Cluster0`;
console.log(mongoConstr)
mongoose.connect(mongoConstr).then((stat)=>{
console.log("connected to MongoDB");
})
//ניצור סכימה שזה מבנה עבור מוצר מבנה 
const productSchema= new mongoose.Schema({
    pid:Number,
    price:Number,
    pname:String
});
//כעת ניצור מודל עבור מוצר שזה החיבור של הסכימה יחד עם הטבלה בבסיס הנתונים 
//הפונקציה מקבלת שתי פרמטרים הראשון שם הטבלה בבסיס הנתונים והשני את הסכימה (תבנית ) איתה נעבוד מול הטבל בבסיס הנתונים)
const Product= new mongoose.model('products',productSchema);

//הוספת מוצר חדש
// Product.insertOne({pid:7,price:10,pname:"water"});
//מבצעים חיפושים של כל המוצרים בטבלת מוצרים ומדפיסים אותם 
Product.find({pid:{$gt:3}},{pid:1,price:1,_id:0}).then( (product)=>{
    console.log(product);
});


//מחיקה לא חובה
// Product.deleteOne({pid:8}).then((count)=>{
//     console.log('product deleted');
// })


module.exports=app;