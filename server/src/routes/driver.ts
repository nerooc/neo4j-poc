//@ts-nocheck

var express = require('express');
var driver = express.Router();

var driverModel = require('../models/driver');

driver.get('/', async (req, res) => {
  const result = await driverModel.findAll();
  res.json(result);
});

driver.get('/:id', async (req, res) => {
  const result = await driverModel.findById(req.params.id);
  res.json(result);
});

driver.post('/', async (req, res) => {
  const result = await driverModel.create(req.body);
  res.json(result);
});

driver.put('/:id', async (req, res) => {
  const result = await driverModel.findByIdAndUpdate(req.params.id, req.body);
  res.json(result);
});

driver.delete('/:id', async (req, res) => {
  const result = await driverModel.findByIdAndDelete(req.params.id);
  res.json(result);
});

module.exports = driver;
