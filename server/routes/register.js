const express = require("express");
const router = express.Router();
const { userSignup } = require("../controllers/signup"); //For both customer and owner
const {userLogin}=require("../controllers/login");
const {auth,isCustomer,isOwner}=require("../middlewares/auth");
const {addCanteen,addItem,getAllCanteen, getCanteenDetails,addItems}=require("../controllers/canteen");
const {updateDisplayPicture, updateProfile,updateEmail,updatePassword}=require("../controllers/profileSettings");
const {editCanteen,editItem,deleteItem,deleteCanteen}=require("../controllers/modifyCanteen")

const {searchItem}=require("../controllers/customer");
const { route } = require("express/lib/router");
//Signup Part
router.post("/signup", userSignup);
//login Part
router.post("/login",userLogin);
//addCanteen
router.post("/owner/addCanteen",addCanteen);
//View Canteen
router.get("/owner/getAllCanteen",getAllCanteen);
//Canteen Details
router.get("/owner/getCanteenDetails",getCanteenDetails)
//Add item
router.post("/owner/addItem",addItem);
router.post("/owner/addItems",addItems)
//Routes for Edit Canteen
router.post("/owner/editCanteen",editCanteen);
//Routes for Edit Item
router.post("/owner/editItem",editItem);
//Routes for Delete Item
router.post("/owner/deleteItem",deleteItem);
//Routes for Delete canteen
router.post("/owner/deleteCanteen",deleteCanteen);

//Customer Routes
//Routes for Search Item
router.post("/customer/searchItem",searchItem);

router.post("/profile/updateDisplayPicture",updateDisplayPicture);
router.post("/profile/updateProfile",updateProfile);
router.post("/profile/updateEmail",updateEmail)
router.post("/profile/updatePassword",updatePassword)


//Protected Route
router.get("/customer",auth,isCustomer,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the Protected Route for Customer",
    })
})

router.get("/owner", auth, isOwner, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected Route for Owner",
  });
});
module.exports = router;