const modelFamille = require("../Models/FamilleAcceuil")
module.exports.addFamille = async (req, res) => {
    try {
        console.log('Starting ajout function');
        const users = await modelFamille.create(req.body);
        console.log('Model.create successful');
        res.status(200).json(users);
        console.log('Response sent successfully');
    } catch (err) {
        console.error('Error in ajout function:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
module.exports.findFamille = async (req, res) => {
    modelFamille.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
}
module.exports.foundIdFamille = async (req, res) => {
    const id = req.params.id
    modelFamille.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err))
}
module.exports.updateFamille = async (req, res) => {
    const id = req.params.id
    modelFamille.findByIdAndUpdate({_id: id}, { name: req.body.name, email: req.body.email })
        .then(users => res.json(users))
        .catch(err => res.json(err))
}
module.exports.deleteFamille = async (req, res) => {
    const id = req.params.id
    modelFamille.findByIdAndDelete({_id: id})
        .then(res => res.json(res))
        .catch(err => res.json(err))
}