var express = require('express');
var router = express.Router();
var Skill = require('../models/skill');

// /api/skills

router.get('/', function(req, res) {
  Skill.find({}, function(err, skills) {
    res.status(200).json(skills);
  });
});

router.post('/', function(req, res) {
  Skill.create(req.body, function(err, skill) {
    res.status(201).json(skill);
  });
});

module.exports = router;
