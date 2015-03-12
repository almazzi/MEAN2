/**
 * Created by Almaz on 11.03.2015.
 */
var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');
var Books = require('../model/Book.js');

router.get('/', function(req, res, next){
    Books.find(function (err, books) {
        if(err) return next(err);
        res.json(books);
    });
});
router.post('/', function(req, res, next) {
    Books.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
router.get('/:id', function(req, res, next) {
    Books.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
router.put('/:id', function(req, res, next) {
    Books.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
router.delete('/:id', function(req, res, next) {
    Books.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
module.exports = router;