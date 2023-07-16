var express = require('express');
const router = express.Router();
var cntroller = require('../controller/store.controller')

router.get("/stores" , cntroller.getStoreList);
router.post("/stores/save" , cntroller.saveStore);

module.exports = router