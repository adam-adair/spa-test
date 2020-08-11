const express = require("express");
const router = express.Router();
const { Color } = require('../db')

router.get("/:color", async (req, res, next) => {
  try {
    //send the colorcount back
    const selectedColor = await Color.findOne({ where:
      {colorName: req.params.color}
    })
    if(selectedColor) res.json(selectedColor)
    else throw new Error('Not a color')
  } catch (er) {
    next(er)
  }
})

module.exports = router
