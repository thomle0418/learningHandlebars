const express = require('express');
const exphbs= require('express-handlebars');
const routes = require('./routes');
const sequelize = require('./config');

const hbs = exphbs.create({});

const app = express();

const PORT = process.env.PORT || 3001;

//This is how you set which templating engine you want to use 
//Tells node we're using handlebars as our templating engine
// and configures handlebars as the view engine 

app.engine('handlebars', hbs.engine);
app.set('view engine','handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);

sequelize.sync({force: false}).then(()=>{
    app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`));
})