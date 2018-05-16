// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var express = require('express');

router = express.Router();

// Routes
// =============================================================

  // GET route for getting all of the favorites
  router.get("/api/Favorite", function(req, res) {
    var query = {};

    db.Favorite.findAll({
      where : {
        userId : req.user.id
      }
    }).then(function(dbFavorite) {
      res.json(dbFavorite);
    });
  });

  // Get route for retrieving a single post
  router.get("/api/Favorite/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Favorite
    db.Favorite.findAll({
      where: {
        id: req.params.id
      },
    }).then(function(dbFavorite) {
      res.json(dbFavorite);
    });
  });

  // POST route for saving a new post
  router.post("/api/Favorite", function(req, res) {
    var newFavorite = {
      restaurant : req.body.restaurant,
      description : req.body.description,
      dish : req.body.dish,
      itemDescription : req.body.itemDescription,
      website : req.body.website,
      userId  : req.user.id
    }
    db.Favorite.create(newFavorite).then(function(dbPost) {
      console.log(dbPost);
      res.json(dbPost);
    });
  });

  // DELETE route for deleting posts
  router.delete("/api/Favorite/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbFavorite) {
      res.json(dbFavorite);
    });
  });

  // PUT route for updating posts
  router.put("/api/Favorite", function(req, res) {
    db.Favorite.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  module.exports = router;