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
    try {
        const allFamilles = await modelFamille.find({});
        res.json(allFamilles);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
module.exports.foundIdFamille = async (req, res) => {
    const id = req.params.id;
    try {
        const foundFamille = await modelFamille.findById({_id: id});
        if (!foundFamille) {
            return res.status(404).json({ error: "Family not found" });
        }
        res.json(foundFamille);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
module.exports.updateFamille = async (req, res) => {
    try {
        const id = req.params.id;
        const updateFields = req.body; // Assuming req.body contains all fields to update
        const updatedMineur = await modelFamille.findByIdAndUpdate({_id: id},updateFields,{ new: true });
            if (!updatedMineur) {
            return res.status(404).json({ message: "Mineur not found" });
        }
        res.json(updatedMineur);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
module.exports.deleteFamille = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedFamille = await modelFamille.findByIdAndDelete({_id: id});
        if (!deletedFamille) {
            return res.status(404).json({ error: "Family not found" });
        }
        res.json({message: "Family deleted successfully"});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
