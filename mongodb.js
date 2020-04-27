const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'final-task'


MongoClient.connect(connectionURL, { useNewUrlParser: true},{ useUnifiedTopology: true }, (error, client) => {
  if (error) {
      return console.log('unable to connect to the database!')
  }
  
})