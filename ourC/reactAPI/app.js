var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var config = require('./config');
var Memories = require('./models/Memories')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
mongoose.connect('mongodb://localhost:27017/reactAPI')
.then((result)=>{
  console.log("You have been succesfully connected to the database")
})
.catch((err)=> {
  console.log("Could not connect to the database: " + err)
})

var app = express();
var cors = require("cors")


if(config.enviroment === "production"){
  app.use(express.static(path.join(__dirname + "/react-client")))
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/react-client", "index.html"))
  })
}

// view engine setup
if(config.enviroment === "development"){
  app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
  }))

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  app.use(express.static(path.join(__dirname, 'public')));
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.get('/memories', (req, res) => {
    
  Memories.find().then(memories =>{
       console.log(memories);
           res.send(memories)
  }).catch(err => {throw err})

})



const login = require('./routes/login')
const addMessages = require('./routes/addMessages')
const signup = require('./routes/signup')
const memories =require('./routes/shareMemories')

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', login);
app.use('/messages', addMessages);
app.use('/signup',signup);
app.use('/memories', memories);


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// app.listen(4000, () => console.log("Jeej I work"))

module.exports = app;
