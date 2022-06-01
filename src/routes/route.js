const express = require('express');
const externalModule=require('../logger/logger');
const externalModule1=require("../util/helper");
const externalModule2=require("../validator/formatter")

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    externalModule.welcome()
    externalModule1.printDate()
    externalModule1.printMonth()
    externalModule1.getBatchInfo()
    externalModule2.trimFun()
    externalModule2.changetoLowerCase()
    externalModule2.changeToUpperCase()


});

module.exports = router;
// adding this comment for no reason