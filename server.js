//===========Requirements=============

const express = require('express')
const app = express()
const methodOverride = require('method-override')
const logger = require('morgan')
const routes = require('./routes/index')

//============Middleware================

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('view engine', 'hbs')








app.use('/', routes)
//============Listenter=====================
const port = process.env.PORT||3000
app.listen(port, function(){
    console.log("Is working")
})