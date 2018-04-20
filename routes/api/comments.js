const express = require('express');

const router = express.Router();
const Comment = require('../../models/comment'); // TODO: look for better syntax

router.post('/addComment', (req, res, next) => {
    comment = new Comment(req.body);
    comment.save((err, savedComment) => {
        if(err) {
            console.log('/addComment comment.save Error: \n\t%s', JSON.stringify(err));

            //throw err;
            res.send(err);
        }

        res.json({
            id: savedComment._id
        });
    });
});

router.get('/getComments', (req, res, next) => {
    Comment.find((err, items) => {
        if(err) {
            console.log('error: %s', JSON.stringify(err));
            res.send(err);
        }

        //console.log(items);
        res.json(items);
    }).sort('-date_created');
});

router.get('/getComment/:id', (req, res, next) => {
    const id = req.params.id;
    Comment.find({ _id: id},(err, items) => {
        if(err) {
            console.log('error: %s', JSON.stringify(err));

            //throw err;
            res.send(err);
        }

        console.log(items);
        res.json(items);
    }).sort('-date_created');
});

/**
Updates a comment already in the database
*/
router.put('/updateComment/:id', (req, res, next) => {
    const id = req.params.id;
    Comment.update({ _id: id }, req.body, (err) => {
        if(err) {
            res.send(err);
        }

        res.json({ status: 'Successfully updated the document' });
    });
});

/**
* Deletes a comment from the database
*/
router.delete('/removeComment/:id', (req, res, next) => {
    const id = req.params.id;
    Comment.remove({ _id: id }, (err) => {
        if(err) {
            res.send(err);
        }

        res.json({ status: 'Successfully removed the document' });
    });
});

module.exports = router;