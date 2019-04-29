//===========Requirements=============

const express = require('express')
const app = express()
const methodOverride = require('method-override')
const logger = require('morgan')
const mainUserApi = require('./api/mainUser.js')
const mongoose = require('mongoose');


  if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
  }
  else {
    mongoose.connect('mongodb://localhost/Project2',{useNewUrlParser:true});
    
  }
  mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
    }
  );
  mongoose.connection.once('open', function() {
    console.log("Mongoose has connected to MongoDB!");
  });

//============Middleware================

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('view engine', 'hbs')

app.get('/', (req,res)=>{
    res.send("Helllo");
})

app.get('/Library', (req, res) => {
    mainuser.getAllLibraryUsers()
      .then(users => {
        res.render("users/users", { listOUsers: users })
      });
  });
  

//============Listenter=====================
const port = process.env.PORT||3000
app.listen(port,"0.0.0.0", function(){
    console.log("Is working")
})