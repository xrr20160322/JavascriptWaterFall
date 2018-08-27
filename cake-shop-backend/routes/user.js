const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')
const userController = require('../controllers/user')

router.get('/', userController.getUsers)
router.post('/signup', userController.signUp)
router.post('/login', userController.login)

router
  .route('/:userId')
  .all(auth)
  .get(userController.getUser)
  .put(userController.update)
  .delete(userController.remove)

module.exports = router
