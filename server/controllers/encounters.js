var models = require('../models');

module.exports = {
  // routes
  getEncounters: function (req, res) {
    //console.log('this is the req for the function getEncounters =', req.query);
    return models.encounters.getEncounterData()
      .then((data) => {
        //console.log('this is the data at the controlller =', data)
        res.send(data)
      })
      .catch((err) => {
        //console.log('this is from the controller =', err)
      })
  },

  postEncounters: function (req, res) {
    //console.log('this is the req for the function postEncounters =', req.body);
    var params = [req.body];
    return models.encounters.postEncountersData(params)
      .then((data) => {
        //console.log('this is the post data at the controller = ', data)
        res.send(data)
      })
      .catch(err => console.log('this is an error from the post controller =', err))
  }
  //example from sdc
  // getReview: function (req, res) {
  //   //console.log('this is the req for the function getReview =',req.query);
  //   var params = [req.query.product_id,1, req.query.count, req.query.sort]
  //   //console.log('these are the params in the getReview func =',params);
  //   return models.reviews.getReviewData(params)
  //     .then((data) => {
  //       //console.log('this is the data at the controller =', data)
  //       res.send(data)
  //     })
  //     .catch((err) => {
  //       console.log('this error is from the model =',err)
  //     })
  // },
}