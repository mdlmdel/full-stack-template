const path = require('path');
const express = require('express');
const watson = require('watson-developer-cloud');
require('dotenv').config();
const config = require('./config/config');
const Entity = require('./model/entity');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect(config.DATABASE_URL);
const alchemy_language = watson.alchemy_language({
  api_key: config.API_KEY
});
const app = express();

// API endpoints go here!


// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// parse application/json
app.use(bodyParser.json())

// GET request to retrieve sentiment analysis on an entity from search
app.get('/api/entities', (req, res) => {
  // This is what you search for
  const { query } = req.query;
  const params = {
  url: 'https://hbr.org',
  sourceText: query
  };

  alchemy_language.sentiment(params, function (err, response) {
  if (err)
    console.log('error:', err);
  else
    console.log(JSON.stringify(response, null, 2));
    res.status(200).json(response, null, 2);
});

  /*const params = new URLSearchParams();
  params.append('q', q);
  params.append('url', 'https://hbr.org');
  params.append('outputMode', 'json');
  params.append('part', 'snippet');
  params.append('apikey', config.API_KEY);

  axios.get(config.ALCHEMY_URL, params)
    .then(res => {
      console.log('WORK', res.data)
      return res.status(200).json({ data: res.data });
    })
    .catch(err => console.log({err}, 'error'))*/
  // Entity
  //   .find({}, function(err, data) {
  //     if (err) {
  //       res.json(err);
  //     }
  //     res.json(data);
  //   })
});

app.get('/api/entities/:id', (req, res) => {
  Entity
    // Search by the object _id property via the convenience method Mongoose provides
    .findById(req.params.id, function(err, data) {
      if (err) {
          res.status(500).json(err);
        }
        res.status(200).json(data);
      })
});

// GET request to view the saved records
app.get('/api/view-reports', (req, res) => {
  Entity
    .find({}, function(err, data) {
      if (err) {
          res.status(500).json(err);
        }
        res.status(200).json(data);
      })
});

app.post('/api/save-record', (req, res) => {
  console.log("Save record via POST request");
  // Previously: 
  const requiredFields = ['query', 'score', 'type', 'date']; 
  /*requiredFields.forEach(field => {
    // ensure that required fields have been sent over
    /*if (! (field in req.body && req.body[field])) {
      return res.status(400).json({message: `Must specify value for ${field}`});
    }*/
  //});


  // Record that fully encapsulates search
  //Entity.create(req.body, function(err, record) {
    const newEntity = new Entity(req.body);
    console.log(req.body);
    console.log(newEntity);
    newEntity.save(function(err, query) {
    if (err) {
      console.log("Error creating record");
      return res.status(500).json(err);
      
    } else {
      console.log("Record created");
      return res.status(201).json(query);
    }
    
  });
});

app.put('/api/entity/:id', (req, res) => {
  // Ensure that the id in the request path and the one in the request body match
  if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
    const message = (
      `Request path id (${req.params.id}) and request body id ` +
      `(${req.body.id}) must match`);
    console.error(message);
    res.status(400).json({message: message});
  }

  // Support a subset of fields being updateable.
  const toUpdate = {};
  const updateableFields = ['query'];

  updateableFields.forEach(field => {
    if (field in req.body) {
      toUpdate[field] = req.body[field];
    }
  });

  Entity
    // Update all key/value pairs in toUpdate -- that's what `$set` does
    .findByIdAndUpdate(req.params.id, {$set: toUpdate})
    .exec()
    .then(entity => res.status(204).end())
    .catch(err => res.status(500).json({message: 'Internal server error'}));
});

// This is a post request that functionally deletes the record
// To make it say delete, you just change "post" in line 112 to "delete"
app.post('/api/entity/:id', (req, res) => {
  Entity
    .findByIdAndRemove(req.params.id)
    // .exec()
    .then(entity => res.status(204).end())
    .catch(err => res.status(500).json({message: 'Internal server error'}));
});

app.delete('/api/view-reports', (req, res) => {
  Entity
    .find({})
    .exec()
    .then(entity => res.status(204).end())
    .catch(err => {console.error(err); res.status(500).json({message: 'Internal server error'})});
});

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index);
});

let server;
function runServer(port=3001) {
    return new Promise((resolve, reject) => {
        server = app.listen(port, () => {
            resolve();
        }).on('error', reject);
    });
}

function closeServer() {
    return new Promise((resolve, reject) => {
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

if (require.main === module) {
    runServer();
}

module.exports = {
    app, runServer, closeServer
};
