const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');
router.get('/:id', studentController.getAllStudentById);
router.get('/',studentController.getAllStudent);
router.delete('/:id',studentController.deletStudentById);
router.post('/',studentController.createStudent)
router.put('/:id', studentController.updateStudent);
module.exports = router;
