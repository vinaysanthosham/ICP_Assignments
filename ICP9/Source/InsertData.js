/**
 * Created by mnpw3d on 20/10/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://dbuser:admin@ds215089.mlab.com:15089/aseaspring18';
//var url = 'mongodb://marmik:2621@ds051923.mlab.com:51923/demo';
var insertDocument = function(db, callback) {
    db.collection('user').insertMany( [{
        "userId" : 16264245,
        "fname" : "Vinay",
        "lname" : "Santhosham",
        "city" : "Kansas City",
        "contact" : "8166738193"
    },{
        "userId" : 16264246,
        "fname" : "Vinay1",
        "lname" : "Santhosham",
        "city" : "Kansas City",
        "contact" : "8166738192"
    },
        {
            "userId" : 16264247,
            "fname" : "Vinay2",
            "lname" : "Santhosham",
            "city" : "Kansas City",
            "contact" : "8166738191"
        },
    {
        "userId" : 16264248,
        "fname" : "Vinay3",
        "lname" : "Santhosham",
        "city" : "Kansas City",
        "contact" : "8166738190"
    }], function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the user collection.");
        callback();
    });
};
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    insertDocument(db, function() {
        db.close();
    });
});