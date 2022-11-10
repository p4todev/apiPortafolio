const oracledb = require('oracledb');

cnx = {
    user : 'patricio',
    password : '1234',
    connectString : 'localhost:1521/xe'
}

async function Open(sql,binds,autoCommit) {
    let cnn = await oracledb.getConnection(cnx);
    let result = await cnn.execute(sql,binds, {autoCommit});
    cnn.release();
    return result;
}


exports.Open = Open;