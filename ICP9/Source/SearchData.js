/*
 * Created by vsvzw on 03-15-2018.
 */

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://dbuser:admin@ds215089.mlab.com:15089/aseaspring18';
var findUser = function(db, callback) {
    var cursor =db.collection('user').find( );
    cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.log(doc);
        } else {
            callback();
        }
    });
};
var findUserwithContact = function(db,callback) {
    var cursor = db.collection('user').find({"contact":"8166738193"});
    cursor.each(function(err,doc) {
        assert.equal(err,null);
        if(doc != null)
        {
            console.log("User ID: " + doc.userId);
            console.log("First Name: " + doc.fname);
            console.log("Last Name: " + doc.lname);
            console.log("City: " + doc.city);

        }
    });
}
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    findUserwithContact(db, function() {
        db.close();
    });
});


