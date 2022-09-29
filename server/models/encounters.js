var db = require('../db').client;
const { Pool, Client } = require('pg')
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

module.exports = {

    getEncounterData: function () {
      const queryString = `SELECT * FROM encounters`
      const queryArgs = [];
      return db.query(queryString, queryArgs)
       .then((res) => {
        //console.log(res.rows);
        return res.rows
       })
       .catch (err => console.log(err));
    },

    postEncountersData: function (params) {
      //console.log('params at the model',params);
      const photourl= params[0].photourl;
      const lure = params[0].lure;
      const location = params[0].location;
      const length = params[0].length;
      const weight = params[0].weight;
      const rating = params[0].rating;
      const waterway = params[0].waterway;
      const description = params[0].description;
      const pressure = params[0].pressure;
      const moonphase = params[0].moonphase || 'unknown';
      const temperature = params[0].temperature;
      const weathertype =  params[0].weathertype || 'unknown';
      const windspeed =  params[0].windspeed;
      const date = params[0].date;
      const queryArgs = [photourl, lure, location, length, weight, rating, waterway, description, pressure, moonphase, temperature, weathertype, windspeed, date];
      const queryString = `INSERT INTO encounters (photourl, lure, location, length, weight, rating, waterway, description, pressure, moonphase, temperature, weathertype, windspeed, date) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)`
      return db.query(queryString, queryArgs)
      .then(res => console.log('this is the response from the post query =', res))
      .catch(err => console.log('this is an error at the post query =', err));
    }

  // queries go here...

  // getReviewData: function (params) {
  //   //console.log('params from models',params);
  //   let sortString = '';
  //   if (params[3] === 'relevant' || params[3] === undefined) {
  //     sortString = 'helpfulness DESC, date DESC'
  //   }
  //   if (params[3] === 'helpfulness') {
  //     sortString = 'helpfulness DESC'
  //   }
  //   if (params[3] === 'newest') {
  //     sortString = 'date DESC'
  //   }
  //   const queryArgs = [params[0] || 1, params[2] || 10]
  //   //console.log(queryArgs);
  //   //const queryString = `SELECT * FROM review WHERE product_id = 1 LIMIT 2`
  //   const queryString =
  //     `SELECT review.id as review_id, review.product_id, review.rating, review.date, review.summary, review.body, review.recommend, review.reviewer_name, review.response, review.helpfulness,
  //   (
  //     SELECT array_to_json(coalesce(array_agg(photo), array[]::record[]))
  //     from
  //     (
  //       SELECT photos.id, photos.url FROM public.photos INNER JOIN public.review r ON review.id = photos.review_id WHERE photos.review_id = r.id ORDER BY id ASC LIMIT 5
  //       ) photo
  //       ) as photos

  //       FROM public.review WHERE review.product_id=$1 AND review.reported=false
  //       ORDER BY ${sortString}
  //       LIMIT $2`
  //     ;

  //   return db.query(queryString, queryArgs)
  //     .then((res) => {
  //       //console.log('from the query on reviews.js =',res.rows);
  //       //console.log(res.rows);
  //       return { 'product': queryArgs[0], 'page': 1, 'count': queryArgs[1], 'results': res.rows }
  //     })
  //     .then((res) => {
  //       //console.log('this is the response from the query at the models =',res);
  //       return res
  //     })
  //     .catch((err) => (console.log('error in getting reviews', err)));
  // },
}