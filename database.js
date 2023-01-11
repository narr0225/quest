const {createPool} = require('mysql')

const pool = createPool({
    host:"database-dev.chf0o2rjlfbz.ap-southeast-1.rds.amazonaws.com",
    user:"devtest",
    password:"gZa5N646M13N@iyV",
})

pool.query(`select * from apidb.users`,(err,res)=>{
    return console.log(res)
})