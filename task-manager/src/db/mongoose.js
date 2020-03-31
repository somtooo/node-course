const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true
});

const User = mongoose.model('User',{
    name: {
        type: String,
        required:true,
        trim:true
    },
    email: {
        type: String,
        required: true,
        trim:true,
        lowercase:true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password:{
      type:String,
      required:true,
      minlength:7,
      trim:true,
      validate(value) {
          if (value.toLowerCase().includes('password')){
              throw new Error('Password cannot contain password')
          }
        }
    },
    age:{
        type: Number,
        default:0,
        validate(value){
            if (value < 0){
                throw new Error('Age must be a positive number')
            }
        }

    }
});

// const me = new User({
//     name: 'Mike',
//     age: 20,
//     email: 'csomtoo@pnw.edu',
//     password: 'messi.360'
// });
//
// me.save().then((me)=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error!',error)
// });
const taskModel = mongoose.model('task',{
   description:{
       type:String,
       trim:true,
       required:true
   },
    completed:{
       type:Boolean,
       default: false
    }
});

const task = new taskModel({
    description: 'Clean the house',
    completed: false
});

task.save().then((task)=>{
    console.log(task)
}).catch((error)=>{
   console.log('Error!',error)
});
