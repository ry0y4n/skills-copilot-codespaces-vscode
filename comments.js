// Create web server
// Respond to requests
// Respond to requests with JSON
// Respond to requests with JSON with comments

var express = require('express');
var app = express();
var comments = require('./comments.json');

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});

// Path: comments.js
// Create web server
// Respond to requests
// Respond to requests with JSON
// Respond to requests with JSON with comments
// Respond to requests for a single comment

app.get('/comments/:id', function(req, res) {
  var comment = comments.find(function(comment) {
    return comment.id === parseInt(req.params.id, 10);
  });

  res.json(comment);
});

// Path: comments.js
// Create web server
// Respond to requests
// Respond to requests with JSON
// Respond to requests with JSON with comments
// Respond to requests for a single comment
// Respond to requests for a single comment with a 404

app.get('/comments/:id', function(req, res) {
  var comment = comments.find(function(comment) {
    return comment.id === parseInt(req.params.id, 10);
  });

  if (comment) {
    res.json(comment);
  } else {
    res.status(404).json({ error: 'Comment not found' });
  }
});

// Path: comments.js
// Create web server
// Respond to requests
// Respond to requests with JSON
// Respond to requests with JSON with comments
// Respond to requests for a single comment
// Respond to requests for a single comment with a 404
// Respond to requests for a single comment with a 404 with a 404 status code

app.get('/comments/:id', function(req, res) {
  var comment = comments.find(function(comment) {
    return comment.id === parseInt(req.params.id, 10);
  });

  if (comment) {
    res.json(comment);
  } else {
    res.status(404).json({ error: 'Comment not found' });
  }
});

// Path: comments.js
// Create web server
// Respond to requests
// Respond to requests with JSON
// Respond to requests with JSON with comments
// Respond to requests for a single comment
// Respond to requests for a single comment with a 404
// Respond