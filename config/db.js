const {MongoClient} = require("mongodb")

const url = "mongodb://127.0.0.1:27017"  // local host database

const atlasUrl = "mongodb+srv://mongoHandson1:mongoAcess@chat-socket.h8dv5xi.mongodb.net/?retryWrites=true&w=majority"

const mongoClient = new MongoClient(url)

async function connectToDatabase(){
try{
 await mongoClient.connect()
  console.log("server connected with our database");
}
catch(err){
    console.log(err,"Error in making the connection with DataBase");
}
}

connectToDatabase()
const database = mongoClient.db("HR")

module.exports = {database}