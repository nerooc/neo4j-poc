//@ts-nocheck

var express = require('express');
var team = express.Router();

var teamModel = require('../models/team');

team.get('/', async (req, res) => {
  const result = await teamModel.findAll();
  res.json(result);
});

team.get('/:id', async (req, res) => {
  const result = await teamModel.findById(req.params.id);
  res.json(result);
});

team.post('/', async (req, res) => {
  const result = await teamModel.create(req.body);
  res.json(result);
});

team.put('/:id', async (req, res) => {
  const result = await teamModel.findByIdAndUpdate(req.params.id, req.body);
  res.json(result);
});

team.delete('/:id', async (req, res) => {
  const result = await teamModel.findByIdAndDelete(req.params.id);
  res.json(result);
});

team.get('/drivers/:id', async (req, res) => {
  const result = await teamModel.findDrivers(req.params.id);
  res.json(result);
});

module.exports = team;
