const express=require("express");
const router=require("express").Router();
const { signupUser, loginUser,createAccount, changePassword, userProfile}=require("../Controllers/AuthControllers");
const { addFamille, deleteFamille, findFamille, updateFamille, foundIdFamille, findFamilleNumber } = require("../Controllers/AddFamille");
const { addMineur, findMineur, updateMineur, deleteMineur, foundIdMineur, findMineurNumber } = require("../Controllers/AddMineur");
const { isAdmin, authenticateToken, isAuthenticated} = require("../Middlewares/VerifyRoje");
const { authenticate} = require("../Middlewares/verifyTkoen");
const { verifyTokenAndRole } = require("../Middlewares/authMiddleware");
//pour authentification
router.post("/signup",signupUser)
router.post("/login",authenticate,loginUser)
router.post("/auth/user",loginUser)
router.post("/admin",authenticate)
//ajout de famille
router.get("familleNumber",findFamilleNumber)
router.get("/getFamille",findFamille)
router.get("/findById/:id",foundIdFamille)
router.post("/addFamille",verifyTokenAndRole,addFamille)
router.put("/updateFamille/:id",updateFamille)
router.delete("/deleteFamille/:id",deleteFamille)
//ajout de Mineur
router.get("/getMineur",findMineur)
router.get("/findById/:id",foundIdMineur)
router.get("/mineurNumber",findMineurNumber)
router.post("/addMineur",addMineur)
router.put("/updateMineur/:id",updateMineur)
router.delete("/deleteMineur/:id",deleteMineur)
//pour la creation du compte du agent
router.post("/verification",createAccount)
module.exports=router