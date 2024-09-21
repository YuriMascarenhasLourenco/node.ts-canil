import express from "express";
import * as PageController from '../controlers/PageControler'
import * as SearchController from '../controlers/searchControler'

const router = express.Router()
router.get('/',PageController.home)
router.get('/dogs',PageController.dogs)
router.get('/cats',PageController.cats)
router.get('/fishes',PageController.fishes)

router.get('/search',SearchController.search)

export default router