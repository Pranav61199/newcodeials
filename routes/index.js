const express=require('express');
const router=express.Router();

//create variable to export the controller
const homeController=require('../controllers/home_controller');

//console.log('router started');

//exported router to publish
router.get('/',homeController.home);
router.use('/users',require('./users'));

module.exports=router;