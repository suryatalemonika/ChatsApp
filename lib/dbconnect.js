const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const connectdb = async()=>{
    const connection = await client.connect();
    const dbs = connection.db('chatsapp')
    const collect = dbs.collection('chats');
    return collect;
}

 module.exports = {
    connectdb
} 