var router = express.Router();
var os = require('os');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.json(os.networkInterfaces());
});
module.exports = router;