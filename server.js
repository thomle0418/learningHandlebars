const express = require('express');
const exphbs= require('express-handlebars');
const User = require('./models/User');
const sequelize = require('./config');



const hbs = exphbs.create({});

const app = express();

const PORT = process.env.PORT || 3001;

//This is how you set which templating engine you want to use 
//Tells node we're using handlebars as our templating engine
// and configures handlebars as the view engine 

app.engine('handlebars', hbs.engine);
app.set('View engine','handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

sequelize.sync({force: false}).then(()=>{
    app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`));
})