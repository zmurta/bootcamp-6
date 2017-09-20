//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://zmurta:cen3031@ds139884.mlab.com:39884/bootcamp-4', //place the URI of your mongo database here.
  }, 
  googleMaps: {
    key: 'AIzaSyBxHNz7wVu7ejKtDOZyZf81uPNmPqdXe3Q'
  },
  port: 8080
};