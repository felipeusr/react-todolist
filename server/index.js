const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended : true }));
app.use("/", routes);

app.listen(3001, (err) => {
    if (err) throw err;
    console.log("Server running in 3001!");
});