//===========Requirements=============

const express = require('express')
const app = express()
const methodOverride = require('method-override')
const logger = require('morgan')
const mainUserApi = require('./api/libraryApi.js')
const mongoose = require('mongoose');
const router = require('./routes/index')


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
app.use(express.static(__dirname + '/frontEnd'));
app.set('view engine', 'hbs')
app.use('/',router);

//============Listenter=====================
const PORT = process.env.PORT||3000
app.listen(PORT, function(){
    console.log("Is working")
})