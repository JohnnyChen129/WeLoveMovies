const restaurantsService = require("./restaurants.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties =require("../errors/hasProperties");

const VALID_PROPERTIES = [
  "movie_id",
  "title",
  "runtime_in_minutes",
  "rating",
  "description",
  "image_url",

];
