const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mineurModel = new Schema({
    dateNaissance: {
        type: String,
    },
    lieuNaissance: {
        type: String,
    },
    nomPere: {
        type: String,
    },
    nomMere: {
        type: String,
    },
    adresse: {
        type: String
    },
    nationalite: {
        type: String,
    },
    departementOuPaysProvenance: {
        type: String,
    },
    signesParticuliers: {
        type: String,
    },
    structureOrigine: {
        type: Boolean,
    },
    categorie: {
        type: Number
    },
    decisionJuge: {
        type: String,
    },
    ogp: {
        type: String,
    },
    dateogp:{
        type: String,
    },
    datePlacementFoyer: {
        type: String,
    },
    motifPlacement: {
        type: Number,
    },
    etatAdoption: {
        type: String
    },
    etatSante:{
        type:String
    },
    situationScolaire:{
        type:String
    },
    descriptionProjetsAccueil:{
        type:String
    },
    statutProprieteAccueil:{
        type:String
    },
    resumePointsCritiques:{
        type:Number
    },
    positiviteExperience:{
        type:Number
    },
    dateSortie:{
        type:Number
    },
    recommandations:{
        type:Number
    },
});

module.exports = mongoose.model("FicheMineur", mineurModel);