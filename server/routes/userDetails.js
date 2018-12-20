const express = require('express');
const router = express.Router();
const UserDetails = require('../models/userdetails');
var ObjectId = require('mongoose').Types.ObjectId;

const { normalizeErrors } = require('../helpers/mongoose');
//post the data to database
router.post('/userdetails', function(req, res) {
  console.log("The request req"+req.body.name)
  const userDetails = new UserDetails({name:req.body.name});
   console.log(userDetails);
  UserDetails.create(userDetails, function(err, userDetails) {
    if (err) {
      return res.status(422).send({errors: normalizeErrors(err.errors)});
    }

    return res.json(userDetails);
  });
});


//Get all details
router.get('/', (req, res) => {
  console.log("The control came to get routes");
  UserDetails.find((err, docs) => {
    if (!err) { res.send(docs); }
    else { console.log('Error in Retrieving Userdetails :' + JSON.stringify(err, undefined, 2)); }
  });
});

//Update the data

router.put('/userdetails/:id', (req, res) => {
  console.log("The control came to get  id routes");
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  var userDetails = {
    name: req.body.name
  };
  UserDetails.findOneAndUpdate(req.params.id, { $set: userDetails }, { new: true }, (err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
  });
});

//Delete the data

router.delete('/userdetails/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  UserDetails.findOneAndDelete(req.params.id, (err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in UserDetails Delete :' + JSON.stringify(err, undefined, 2)); }
  });
});

module.exports = router;

