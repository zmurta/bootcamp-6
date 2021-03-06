//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://zmurta:cen3031@ds139884.mlab.com:39884/bootcamp-4', //place the URI of your mongo database here.
  }, 
  googleMaps: {
    key: 'AIzaSyCcGWcfEnIQYzM4i5NIQZxIFy7QRn653AI'
  },
  port: process.env.PORT || 8080
};