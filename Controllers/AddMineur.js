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
    try {
        const allMineurs = await modelMineur.find({});
        res.json(allMineurs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports.foundIdMineur = async (req, res) => {
    const id = req.params.id;
    try {
        const foundMineur = await modelMineur.findById({ _id: id });
        if (!foundMineur) {
            return res.status(404).json({ error: "Mineur not found" });
        }
        res.json(foundMineur);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports.updateMineur = async (req, res) => {
    const id = req.params.id;
    const updateFields = req.body;
    try {
        const updatedMineur = await modelMineur.findByIdAndUpdate({ _id: id }, updateFields, { new: true });
        if (!updatedMineur) {
            return res.status(404).json({ error: "Mineur not found" });
        }
        res.json(updatedMineur);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports.deleteFamille = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedFamille = await modelFamille.findByIdAndDelete({ _id: id });
        if (!deletedFamille) {
            return res.status(404).json({ error: "Family not found" });
        }
        res.json({ message: "Family deleted successfully", deletedFamille });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

