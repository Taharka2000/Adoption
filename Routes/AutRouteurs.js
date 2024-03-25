const express=require("express");
const router=require("express").Router();
const { signupUser, loginUser,createAccount, changePassword, userProfile}=require("../Controllers/AuthControllers");
const { addFamille, deleteFamille, findFamille, updateFamille } = require("../Controllers/AddFamille");
const { addMineur, findMineur, updateMineur, deleteMineur } = require("../Controllers/AddMineur");
const { isAdmin, authenticateToken, isAuthenticated} = require("../Middlewares/VerifyRoje");
const { authenticate} = require("../Middlewares/verifyTkoen");
const { verifyTokenAndRole } = require("../Middlewares/authMiddleware");
//pour authentification
router.post("/signup",signupUser)
router.post("/login",authenticate,loginUser)
router.post("/auth/user",loginUser)
router.post("/admin",authenticate)
//ajout de famille
router.post("/addFamille",verifyTokenAndRole,addFamille)
router.get("/getFamille",findFamille)
router.put("/updateFamille/:id",updateFamille)
router.delete("/deleteFamille/:id",deleteFamille)
//ajout de famille
router.post("/addMineur",addMineur)
router.get("/getMineur",findMineur)
router.put("/updateMineur/:id",updateMineur)
router.delete("/deleteMineur/:id",deleteMineur)
//pour la creation du compte du agent
router.post("/verification",createAccount)
module.exports=router