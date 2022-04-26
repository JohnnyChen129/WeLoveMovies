const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

const addCritic = mapProperties({
    preferred_name: "critic.preferred_name",
    surname: "critic.surname",
    organization_name: "critic.organization_name",
  });

function list () {
    return knex("movies").select("*");
}

function listShowing () {
        return knex("movies as m")
            .join("movies_theaters as mt", "mt.movie_id", "m.movie_id")
            .select("m.*")
            .where({ "mt.is_showing": true })
            .groupBy("m.movie_id");
    }


function read(id){
    return knex("movies").select("*").where({movie_id: id}).first();
}

function readReviews(movie){
    return knex("movies as m")
    .join("reviews as r", "m.movie_id", "r.movie_id")
    .join("critics as c", "r.critic_id", "c.critic_id")
    .select("r.*", "c.*")
    .where({"r.movie_id": movie.movie_id})
    .then(reviews => reviews.map(addCritic));
}

function readTheaters(movie){
    return knex("movies as m")
    .join("movies_theaters as mt", "mt.movie_id", "m.movie_id")
    .join("theaters as t","t.theater_id", "mt.theater_id")
    .select("mt.*", "t.*")
    .where({"m.movie_id": movie.movie_id});
}


module.exports = {
    list,
    listShowing,
    read,
    readReviews,
    readTheaters,
}