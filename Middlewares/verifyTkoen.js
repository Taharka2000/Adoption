/*const jwt = require('jsonwebtoken');

module.exports.authenticateToken = (req, res, next) => {
    // Récupérer le token du header
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        // Vérifier et décoder le token
        const decoded = jwt.verify(token, 'sammba yero taharka sow');

        // Ajouter les informations utilisateur à la requête
        req.user = decoded.data;

        // Passer à la prochaine étape
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
};*/

const User = require("../Models/User");
module.exports.authenticate = async (req, res, next) => {
    // Extraction des données d'identification de la requête
    const { email, password } = req.body;
  
    try {
      // Authentification de l'utilisateur en utilisant les informations d'identification
      const user = await User.login(email, password);
  
      // Vérification du rôle de l'utilisateur
      if (user.role !== 'tiak-tiak') {
        // Si l'utilisateur n'a pas le rôle requis, renvoyer une réponse avec un statut 403
        return res.status(403).json({ message: 'Access denied. Only tiak-tiak users can access.' });
      }
  
      // Si l'utilisateur a le rôle requis, définissez req.user avec les informations de l'utilisateur
      req.user = user;
  
      // Passez à l'étape suivante
      next();
    } catch (error) {
      // Gestion des erreurs et envoi d'une réponse d'erreur appropriée
      res.status(400).json({ error: error.message });
    }
  };