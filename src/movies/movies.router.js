const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed")



router
  .route("/")
  .get(movies.list)
  .all(methodNotAllowed);

router
  .route("/:moviesId")
  .all(methodNotAllowed);

module.exports = router;
