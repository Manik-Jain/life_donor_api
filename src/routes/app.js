import express from 'express' 
import home from './home.js'

let router  = express.Router()

router.use('/', home)

export default router