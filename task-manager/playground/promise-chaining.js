require('../src/db/mongoose');
const User = require('../src/models/user');

// 5e82fd9017fe5687c4c1f8ee

User.findByIdAndUpdate('5e82fd9017fe5687c4c1f8ee',{age:30}).then((user)=>{
    console.log(user)
    return User.countDocuments({age:30})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
});