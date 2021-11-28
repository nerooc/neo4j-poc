//@ts-nocheck

var express = require('express');
var racetrack = express.Router();

var racetrackModel = require('../models/racetrack');

racetrack.get('/', async (req, res) => {
  const result = await racetrackModel.findAll();
  res.json(result);
});

racetrack.get('/:id', async (req, res) => {
  const result = await racetrackModel.findById(req.params.id);
  res.json(result);
});

racetrack.post('/', async (req, res) => {
  const result = await racetrackModel.create(req.body);
  res.json(result);
});

racetrack.put('/:id', async (req, res) => {
  const result = await racetrackModel.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  res.json(result);
});

racetrack.delete('/:id', async (req, res) => {
  const result = await racetrackModel.findByIdAndDelete(req.params.id);
  res.json(result);
});

module.exports = racetrack;
