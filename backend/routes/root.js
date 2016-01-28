var router = require('express').Router()

/**
*	Custom routes
**/
router.use('/auth', 	require('./auth'))
router.use('/user', 	require('./user'))
router.use('/insults', 	require('./insults'))

module.exports = router
