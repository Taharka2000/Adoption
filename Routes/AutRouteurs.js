const express=require("express");
const router=require("express").Router();
const { signupUser, loginUser,createAccount, changePassword, userProfile}=require("../Controllers/AuthControllers");
const { addFamille, deleteFamille, findFamille, updateFamille } = require("../Controllers/AddFamille");
const { addMineur } = require("../Controllers/AddMineur");
const { isAdmin, authenticateToken, isAuthenticated} = require("../Middlewares/VerifyRoje");
const { authenticate} = require("../Middlewares/verifyTkoen");
const { verifyTokenAndRole } = require("../Middlewares/authMiddleware");
router.post("/signup",signupUser)
router.post("/login",authenticate,loginUser)
router.post("/auth/user",loginUser)
router.post("/addFamille",verifyTokenAndRole,addFamille)
router.post("/addMineur",isAuthenticated,isAdmin,addMineur)
router.post("/admin",authenticate)
router.post("/verification",createAccount)
router.get("/getFamille",findFamille)
router.put("/updateFamille/:id",updateFamille)
router.delete("/deleteFamille/:id",deleteFamille)
module.exports=router