const db = require('./dbconnect');

const userRegister = async (req) => {
    let register = await db.connectdb();
    let preset = await register.find({ mobileNo: req.no }).toArray()
    console.log(preset)
    if (preset.length > 0) {
        preset.forEach((e) => {
            if (e['mobileNo'] == req.no) {
                console.log('no need to register user')
                if (preset.length != 1) {
                    let insertuser = register.deleteOne({ mobileNo: req.no });
                    console.log('delete')
                }
            } else {
                let insertuser = register.insertOne({ mobileNo: req.no });
                console.log('registered user')
                console.log(insertuser)
            }
        })
    } else {
        let insertuser = await register.insertOne({ mobileNo: req.no });
        console.log('registered user1')
        console.log(insertuser)
    }

}

const Login = () => {
    console.log('user logged innnnnnnnnnnn');
}

module.exports = {
    userRegister, Login
}