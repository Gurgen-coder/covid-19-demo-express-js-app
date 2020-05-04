const path = require('path');
const express = require('express');
const routes = require('./routes');
const app = express();
const port = process.env.PORT;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.locals.basedir = __dirname;

app.use(express.static(path.join(__dirname, "public")));
app.use('/', routes);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));