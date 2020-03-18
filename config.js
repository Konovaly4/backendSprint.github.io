const express = require('express');
const path = require('path');
const router = require('./router');

const { PORT = 3000 } = process.env;
const app = express();

module.exports = {
  express, path, router, PORT, app,
};
