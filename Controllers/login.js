const { Login } = require('../Model/Schema');
const schema = require('../Validator/validate')

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
    
        // Validate input
        const { error } = schema.validate({ username, password });
        if (error) {
        res.status(400).json({ error: error.details[0].message });
        }
    
        // Check if the user exists
        const user = await Login.findOne({ username, password });
        if (!user) {
        res.status(401).json({ error: 'Invalid username or password' });
        }
       
       
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
        console.log(error);
    }
    
}


module.exports = login;