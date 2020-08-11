const express = require('express');
const morgan = require("morgan");
const path = require("path");
const routes = require('./routes')
const { db } = require('./db')

const app = express();
const PORT = 3000;

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./public")));
//app.use(express.urlencoded({ extended: false }));
//app.use(express.json());

app.get("/", function (req, res) {
  res.redirect("/public/");
});

app.use("/api", routes)

app.use('*', () => {
  throw new Error('Not a page')
})

const init = async () => {
  try {
    await db.sync({ force: true });
    await db.seed();
    app.listen(PORT, () => {
      console.log(`Listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error)
  }
};

app.use((err, req, res, next) => {
  console.log(err.stack)
  res.status(500).send(err.message);
})

init();
