const express = require('express');
const mongoose = require('mongoose');
const path = require('path');



const app = express();

//Set Up the Assets Folder
app.use(express.static(path.join(__dirname, 'public')));

// Passport Config
// require('./config/passport')(passport);

// DB Config TODO CONFIG KEYS
//const db = require('./config/keys').MongoURI;
const db = "mongodb+srv://DogTagDB:R6aeAgPWfYaQciPR@cluster0.4h4voqp.mongodb.net/DogtagApp";

// Db Connection from .env file
// const db = process.env.MONGO_URI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


// EJS
//app.use(expressLayouts);
//app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Express session
/*app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);*/

// Passport middleware
/*app.use(passport.initialize());
app.use(passport.session());*/

// Routes
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/user.js'));

app.use('/dogs', require('./routes/dog.js'));

const PORT = 8086;

app.listen(PORT, console.log(`Server started on port ${PORT}`));