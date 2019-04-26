//===========Requirements=============

const express = require('express')
const app = express()
const methodOverride = require('method-override')
const logger = require('morgan')
const mainUserApi = require('./api/mainUser.js')


//============Middleware================

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('view engine', 'hbs')

app.get('/',(req,res)=>{
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
app.listen(port, function(){
    console.log("Is working")
})