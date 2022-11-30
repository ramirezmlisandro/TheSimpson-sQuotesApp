const { Router } = require('express');
const quotesRoute = require('./quotesRoutes.js');

const router = Router();
router.use(quotesRoute);

module.exports = router;