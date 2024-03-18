const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const familleModel = new Schema({
    nomChefFamille: {
        type: String,
    },
    nomConjoint: {
        type: String,
    },
    situationMatrimoniale: {
        type: String,
    },
    niveauInstruction: {
        type: String,
    },
    professions: {
        type: String
    },
    formationDomainesCompetences: {
        type: String,
    },
    fourchetteRevenusMensuel: {
        type: String,
    },
    sourceRevenus: {
        type: String,
    },
    presenceEnfantsBiologique: {
        type: Boolean,
    },
    nombreEnfantsBiologique: {
        type: Number
    },
    filiationEnfantsBiologiques: {
        type: String,
    },
    formationEnfantsBiologiques: {
        type: String,
    },
    typeDemeure: {
        type: String,
    },
    conditionsLogement: {
        type: Number,
    },
    eau: {
        type: String
    },
    electricite:{
        type:String
    },
    wifi:{
        type:String
    },
    climatisation:{
        type:String
    },
    statutProprieteAccueil:{
        type:String
    },
    capaciteAccueil:{
        type:Number
    },
    nombreMineursPouvantAccueillis:{
        type:Number
    },
    trancheAgeMineursDesires:{
        type:Number
    },
    nombreMineursPlaces:{
        type:Number
    },
    montantAllocation:{
        type:String
    },
    observations:{
        type:String
    }
});

module.exports = mongoose.model("FamilleAcceuil", familleModel);