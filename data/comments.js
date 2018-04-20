const mongoose = require('mongoose');
const Comment = require('../models/comment.js');

const comment = [
    {
       user_name: "user_name" ,
        comment: "comment",
        rating: "rating"
    },
    
function add_comments() {
    //clear out entries, add default data
    return Comment.deleteMany({}).then(
        (res) => {
            console.log('\n[Comment]');
            console.log('Removed existing comments, %s', res);
            return User.insertMany(comment, (err, docs) => {
                for(let i = 0; i < docs.length; i++) {
                    console.log(`    * ${docs[i].user_name}`);
        }
         console.log();
            })
        }
    );
}

module.exports = add_comments;

        
       