const {SignUp} = require('../Model/Schema');
const schema = require('../Validator/validate');
const bcrypt= require('bcrypt');


const signUp = async (req, res) => {
    try {
        const { fullName, email, username, password } = req.body;
        console.log(req.body);

        //validate user's input
        const { error, value } = schema.validate(req.body);
        if (error) {
            console.log(error);
        res.status(400).json({ error: error.details[0].message });
        }
        else{

        // Check if the username is already taken
        const existingUser = await SignUp.findOne({username: username})
        if (existingUser) {
             res.status(409).json({ error: 'Username already taken' });
        }

        else{

            //hash the password
            const passwordHash = await bcrypt.hash(password, 10);
            
            //create a new user
            const newUser = new SignUp({ fullName, email, username, password: passwordHash})
            await newUser.save();
            
            console.log(newUser)
            
            res.json({ message: 'New User successfully created' });
        }
    }
    } catch (error) {
        // res.status(500).json({ error: 'internal server error' });
        console.log(error);
    };
};


module.exports = signUp;