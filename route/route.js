var express = require('express');
const router = express.Router();
var cntroller = require('../controller/controller')

router.get('/get-notes',cntroller.getAllNote)
router.post('/send-note',cntroller.sendNote)
router.put('/update-note',cntroller.updateNote)
router.delete('/delete-note/:noteId',cntroller.deleteNote)

module.exports = router
