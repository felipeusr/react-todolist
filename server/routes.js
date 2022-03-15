const express = require("express");
const app = express();
const mysql = require("./mysql");

app.get("/tarefas", (require, response) => {
    mysql.db.query("SELECT * FROM TAREFAS_TB", (err, results) => {
        response.send(results);
    });
});

app.post("/enviar", (require, response) => {
    mysql.db.query("INSERT INTO TAREFAS_TB (tarefa) VALUES (?)", [require.body.tarefa]);
});

app.delete("/excluir=:id", (require, response) => {
    mysql.db.query(`DELETE FROM TAREFAS_TB WHERE id = ${require.params.id}`);
});

module.exports = app;