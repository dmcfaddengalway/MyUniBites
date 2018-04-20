const mongoose = require('mongoose');

let connection = null;

// mongodbConnectionString was moved to the .env file in the project root
/* .env file template
MONGODB=mongodb://#MongoDbUser#:#MongoDbPassword#@#MongoDbServer#:#MongoDbPort#/#MongoDbSchema#
ENVIRONMENT=development
*/
const mongodbConnectionString = process.env.MONGODB;

if(!mongoose.connection.db) {
    connection = mongoose.connect(mongodbConnectionString, { useMongoClient: true }, (err) => {
        if(err) {
            console.error('Error connecting to mongoDB: %d', JSON.stringify(err));
        } else{
            console.log('connected to database...... ');
        }
    });
}

module.exports = connection;