const modelMineur = require("../Models/FicheMineur")
module.exports.addMineur = async (req, res) => {
    try {
        console.log('Starting ajout function');
        const users = await modelMineur.create(req.body);
        console.log('Model.create successful');
        res.status(200).json(users);
        console.log('Response sent successfully');
    } catch (err) {
        console.error('Error in ajout function:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
module.exports.findMineur = async (req, res) => {
    modelMineur.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
}
module.exports.foundIdMineur = async (req, res) => {
    const id = req.params.id
    modelMineur.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err))
}
module.exports.updateMineur = async (req, res) => {
    const id = req.params.id
    modelMineur.findByIdAndUpdate({ _id: id }, { name: req.body.name, email: req.body.email })
        .then(users => res.json(users))
        .catch(err => res.json(err))
}
module.exports.deleteMineur = async (req, res) => {
    const id = req.params.id
    modelMineur.findByIdAndDelete({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err))
}
