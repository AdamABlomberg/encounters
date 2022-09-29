var controller = require('./controllers');
var router = require('express').Router();

router.get('', controller.encounters.getEncounters)
router.post('', controller.encounters.postEncounters);
//Connect controller methods to their corresponding routes
//router.get('', controller.reviews.getReview)  // just products... continues to url path app.use(/reviews, router)

//router.get('/meta', controller.reviews.getMeta);  // /:variable url  placeholder and endpoint variable

module.exports = router;