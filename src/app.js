const request = require('request')
const path = require('path')

const geocode = require('./geocode.js')
const weather = require('./weather.js')

const express = require('express')
const app = express()

const hbs = require('hbs')

//define paths
const dirl = path.join(__dirname,'../public')
const viewspath = path.join(__dirname,'../templates/views')
const parpath = path.join(__dirname,'../templates/partials')

hbs.registerPartials(parpath)


//set up static directory to serve
app.use(express.static(dirl))

//setup handle bars engine and its location
app.set('view engine','hbs')
app.set('views',viewspath)


app.get('/',(req,res)=>{
    res.render('index',{
        'title':'Weather app',
        'con':'india'
    })
})

app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/help',(req,res)=>{
    res.render('help')
})

app.get('/weather',(req,res)=>{
    console.log(req.query.location)
    if(req.query.location){
        console.log(req.query.location)
        geocode(req.query.location,(one,two)=>{
            weather(two.lat,two.lon,(one,two)=>{
                if(!one){
                    console.log(two)
                    res.send(two)
                }
                else{
                    console.log(one)
                    res.send(one)
                }
            })
        }) }
        // res.send({
        //     'name':'chakri',
        //     'weather':'it is raining smally',
        //     'location':req.query.location}
        // )}
    else{
        res.send('location needs to be provided')
    }
    
})

// error pages
app.get('*',(req,res)=>{
    res.send('My 404 Page')
})





app.listen(3000,()=>{
    console.log("app is liestining on port 3000")
})

