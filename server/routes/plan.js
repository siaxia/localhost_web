const express = require('express');
const router = express.Router();
const management = require('../api/plan');
const cors = require('cors');

router.use(cors());

router.get('/list', function (req, res, next) {
	management.list(req, res);
});

router.post('/load', function (req, res, next) {
	management.load(req, res);
});

router.post('/write', function (req, res, next) {
	management.write(req, res);
});

router.post('/delete', function (req, res, next) {
	management.delete(req, res);
});

router.post('/timeUpdate', function (req, res, next) {
	management.timeUpdate(req, res);
});

router.post('/dayUpdate', function (req, res, next) {
	management.dayUpdate(req, res);
});

router.post('/planUpdate', function (req, res, next) {
	management.planUpdate(req, res);
});

router.post('/search', function (req, res, next) {
	management.search(req, res);
});

module.exports = router;
