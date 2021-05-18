const {Router} = require('express');
const router = Router();
const {getTypes} = require('../controllers/types');

router.get('/', getTypes);

module.exports = router;