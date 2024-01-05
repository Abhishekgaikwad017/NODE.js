// const { nanoid } = require("nanoid");
const shortid = require("shortid");
const URl = require("../models/url");

 function handleGenShortUrl(req,res){
      const body = req.body;
      if(!body.url) return res.status(400).json({error :"url required"})
      const shortID = shortid();
      console.log("shortid",shortID)
      URl.create({
      shortId : shortID,
      redirectURL : body.url,
      visitHistory : [],
     })
     

      return res.json({ id: shortID});
};

module.exports = {
      handleGenShortUrl,
};