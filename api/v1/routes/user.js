const express=require('express');
const router = express.Router();
const usercontroller=require('../controllers/user');
const{getALLuser,
    addNewuser,
    getuserbyid,
    updateuserById,
    deleteuserById
    
}=require('../controllers/user');

// נקודת קצה לשליפת כל המוצרים 
router.get('/',usercontroller.getALLuser);   //הגדרת נקודת קצה שאמורה להחזיר את כל המוצרים
router.get('/:id',usercontroller.adduserById);
//נקודת קצה להוספת מוצר חדש
router.post("/",usercontroller.addNewuser); 
// נקודת קצה לעדכון מוצר קיים 
router.put('/',usercontroller.updateuserById);
   router.delete('/',usercontroller.deleteuserById);


    module.exports=router;