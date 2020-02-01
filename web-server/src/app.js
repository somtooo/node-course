const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname, '../template/views');
const partialsPath = path.join(__dirname,'../template/partials');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory tp serve
app.use(express.static(publicDirectoryPath));

app.get('',(req,res)=>{
   res.render('index',{
       title:'Weather App',
       name:'Somtoo'
   })
});

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Page',
        name:'Somtoo'
    })
});

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help Page',
        help:'Hello you need help!!',
        name:'Chukwurah Somtoo'
    })
});

app.get('/weather',(req,res)=>{
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
});

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title: '404 Page',
        message:'-Help article not found',
        name:'Chukwurah Somtoo'
    })
});

app.get('*', (req,res)=>{
    res.render('404',{
        title:'404',
        message:'-Page not found',
        name:'Chukwurah Somtoo'
    })
});
app.listen(3000, ()=>{
    console.log('Server is up on port 3000')
});
