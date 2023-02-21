const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/", (req, res) => {
  try {
    const q = "select * from testtable";
    db.query(q, (error, result) => {
      if (error) return res.json(error);
      res.json(result.rows);
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/add", (req, res) => {
  try {
    const { name, email } = req.body;
    const q = "INSERT INTO testtable(name,email) VALUES ($1,$2)";
    db.query(q, [name, email], (error, result) => {
      if (error) return res.json(error);
      return res.json("created successfully");
    });
  } catch (error) {
    console.log(error);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email } = req.body;
    const q = "UPDATE testtable SET  name = $1, email = $2 where id = $3";
    await db.query(q, [name, email, id], (error, result) => {
      if (error) {
        console.log(error);
        return res.json(error);
      }
      return res.json("updated successfully");
    });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const q = "DELETE FROM testtable WHERE id = $1";
    db.query(q, [id], (error, result) => {
      if (error) return res.json(error);
      res.json("deleted successfully");
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
