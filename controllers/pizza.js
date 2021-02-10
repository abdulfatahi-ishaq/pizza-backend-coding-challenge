const { db } = require('../helpers/dbcon');

exports.orders = (req, res) => {
    let sql = "SELECT * FROM orders";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
}


exports.get_pizzas = (req, res) => {
    let sql = "SELECT * FROM pizza";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
}

exports.view_order = (req, res) => {
    let sql = `SELECT * FROM orders WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
}

exports.new_pizza = (req, res) => {
    const { name, price } = req.body;
    let sql = 'INSERT INTO pizza SET ?';
    let details = { name: name, price: price };
    db.query(sql, details, (err, result) => {
        if (err) throw err;
        res.send("Pizza Created Successfully!");
    })
}