const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/spa-test", {
  logging: false
});

const Color = db.define('color',{
  colorName: Sequelize.STRING,
  colorCount: Sequelize.INTEGER
})

db.seed = async function() {
  await Color.create({
    colorName: 'red',
    colorCount: 3
  });
  await Color.create({
    colorName: 'green',
    colorCount: 5
  });
  await Color.create({
    colorName: 'blue',
    colorCount: 2
  });
}
module.exports = {
  db,
  Color
}
