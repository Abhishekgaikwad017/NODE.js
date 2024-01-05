const express = require("express");
const {handleGenShortUrl} = require("../controller/url")

const router = express.Router();

router.post("/",handleGenShortUrl);



module.exports = router;