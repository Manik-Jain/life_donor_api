import express from 'express'
import morgan from 'morgan'
import fs from 'fs'
import path from 'path'
import jwt from 'express-jwt'
import propertiesReader from 'properties-reader'
import jwtConfig from '../properties/jwtConfig.js'
import https from 'https'

let app = express();
const properties = propertiesReader(path.resolve('properties/properties.file'));

app.use(express.json());

function getRouter() {
    return express.Router()
}

export {
    app,
    getRouter as router,
    properties
}