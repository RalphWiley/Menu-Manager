// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("./connection.js");

// ORM
// =============================================================

var tableName = "UserMenus";

var orm = {

  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  getUserMenus: function(callback) {
    var s = "SELECT * FROM " + tableName;

    connection.query(s, function(err, result) {

      callback(result);

    });
  },

  // Here our ORM is creating a simple method for performing a query of a single character in the table.
  // Again, we make use of the callback to grab a specific character from the database.

  deleteMenu: function(id, callback) {

    var s = "DELETE FROM " + tableName + " WHERE id=?";

    connection.query(s, [id], function(err, result) {

      callback(result);
    });

  },

  addMenu: function(UserMenus, callback) {
    var s = "INSERT INTO " + tableName + " (text, ) VALUES (?,?)";
//insert code here that will tell the ORM what to pull to update the database 
    connection.query(s, [
      ///insert API object here so it will call result and pull into database
      //insert code here that will add user information based on who is signed into the app 
      
    ], function(err, result) {

      callback(result);

    });
  },

};

module.exports = orm;
