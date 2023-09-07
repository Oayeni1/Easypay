const mongoose = require('mongoose');
const schema = mongoose.Schema;

//Signup's Schema
const signUpSchema = new schema({
    fullName: {
      type: String,
      required: [true,'feild should not be empty']
    },
    email: {
      type: String,
      required: [true,'feild should not be empty']
    },
    username: {
      type: String,
      required: [true,'feild should not be empty']
    },
    password: {
      type: String, 
      require: [true, 'feild should not be empty']
    }
});

const SignUp = mongoose.model('Users', signUpSchema);



//Login's Schema
const loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,'feild should not be empty']
      },
      password: {
        type: String, 
        require: [true, 'feild should not be empty']
      }
});

const Login = mongoose.model('login', loginSchema);

module.exports={SignUp, Login};
// module.exports=Login;