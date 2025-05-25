const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  console.log("New contact form submission:", name, email, message);
  // You can integrate nodemailer here to send email to your business
  res.json({ message: "Thank you for contacting us!" });
});

module.exports = router;
