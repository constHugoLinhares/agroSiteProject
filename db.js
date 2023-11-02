
async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:Hugo2802_@localhost:3306/sys");
    console.log("Conectou ao MySQL!")
    global.connection = connection;
    return connection;
}

async function selectCustomers() {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM cliente;')
    return rows;
}

async function insertCustomer(customer) {
    const conn = await connect();
    const sql = 'INSERT INTO cliente(nome,idade,uf) VALUES (?,?,?);'
    const values = [customer.nome, customer.idade, customer.uf]
    return await conn.query(sql, values);
}

async function updateCustomer(id, customer) {
    const conn = await connect();
    const sql = 'UPDATE cliente SET nome=?, idade=?, uf=? WHERE id=?'
    const values = [customer.nome, customer.idade, customer.uf, id]

    return await conn.query(sql, values)
}

async function deleteCustomer(id) {
    const conn = await connect();
    const sql = 'DELETE FROM cliente WHERE id=?;'

    return await conn.query(sql, [id])
}

module.exports = {selectCustomers, insertCustomer, updateCustomer, deleteCustomer}