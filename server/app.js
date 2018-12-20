const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require('path');
const userDetails = require("./routes/userDetails");
var user = require('./routes/users');
const port =  process.env.PORT ||4000;


const rentalRoutes = require('./routes/rentals'),
  userRoutes = require('./routes/users'),
  bookingRoutes = require('./routes/bookings');
  //,
  // imageUploadRoutes = require('./routes/image-upload');


const app = express();
const url ='mongodb://hotelapp:India123@ds151070.mlab.com:51070/hotelapp';

mongoose.connect(url,{ useNewUrlParser: true }).then(() => {
  console.log('Connected to Database')
});

app.use(cors());

//View Engine
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");
// app.engine("html", require("ejs").renderFile);

// Set Static Folder
//app.use(express.static(path.join(__dirname, "client")));

//Body Parser MW
app.use(bodyParser.json());


app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/bookings', bookingRoutes);
//app.post('/api/v1', imageUploadRoutes);
app.use("/api", userDetails);


const appPath = path.join(__dirname, '..', 'dist/allinone');
app.use(express.static(appPath));


app.get('/', function(req, res) {
  res.sendFile(path.resolve(appPath, 'index.html'));
});

// app.post('/api/register', user.signup);
// app.post('/api/login', user.login);



app.listen(port, function() {
  console.log("Server started on port " + port);
});
