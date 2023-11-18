const db = require('./dbconnect');

const getData = async()=>{
    let data = await db.connectdb();
    let getd =  data.find({});
    console.log(await getd.toArray())
}
getData()