const express = require('express');
const User = require("../connection");
const {HandleGetAllUser,
      HandleCreateNewUser,
      HandleGetUserById,
      HandleUpadateUserById,
      HandleDeleteUserById} = require("../controller/user")
const router = express.Router();



router
      .route("/")
      .get(HandleGetAllUser)
      .post(HandleCreateNewUser);

router
      .route("/:id")
      .get(HandleGetUserById)
      .patch(HandleUpadateUserById)
      .delete(HandleDeleteUserById);


module.exports = router;