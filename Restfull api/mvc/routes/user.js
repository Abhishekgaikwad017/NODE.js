const express = require("express");
const User = require("../model/user");

const router = express.Router();

router.get("/api/users",async (req,res)=>{
      const alldb = await User.find({});
      return res.json(alldb);
});

// router.get("/",async (req,res)=>{
//       const alldb = await User.find({});
//       const html = `
//       <ul>
//       ${alldb
//             .map((user)=>`<li>${user.firstName}- ${user.email} </li>`)
//             .join("")}
//       </ul>
//       `;
//       return res.send(html);
// });


router
      .route("/:id")
      .get(async (req,res)=>{
           const user = await User.findById(req.params.id);
            return res.json(user);
      })
      .patch(async (req,res)=>{
            await User.findByIdAndUpdate(req.params.id,{lastname:"Change"})
            return res.json({status:"Success"});
      })
      .delete(async (req,res)=>{
           await User.findByIdAndDelete(req.params.id);
           return res.json({status:"Success"});
      });

router.post("/",async (req,res)=>{
      const body = req.body;
      const result = await User.create({
            firstName : body.firstName,
            lastname : body.lastname,
            email : body.email,
            gender : body.gender,
            jobTitle : body.jobTitle,
      })
      return res.status(201).json({status :"user added"});
});

module.exports = router;