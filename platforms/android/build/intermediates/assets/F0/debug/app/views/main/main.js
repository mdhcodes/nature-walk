// The frame module handles app navigation.
// The topmost frame is the view displayed to users.
var frameModule = require("ui/frame");
var Sqlite = require( "nativescript-sqlite" );

var page;
var butterfly;
var wildflower;
var mockingbird;
var blossom;

exports.loaded = function(args) {
    // Get a reference to the current page.
    page = args.object;
    console.log("PAGE", page);
    butterfly = page.getViewById("Butterfly");
    console.log("BUTTERFLY", butterfly.id);
    wildflower = page.getViewById("Wildflower");
    console.log("WILDFLOWER", wildflower.id);
    mockingbird = page.getViewById("Mockingbird");
    console.log("MOCKINGBIRD", mockingbird.id);
    blossom = page.getViewById("Blossom");
    console.log("BLOSSOM", blossom.id);
};

exports.getFacts = function() {
    console.log("FACTS", butterfly.id);

    if (!Sqlite.exists("nature_walk.db")) {
        Sqlite.copyDatabase("nature_walk.db");
    }

    (new Sqlite("nature_walk.db")).then(function(db) {
        // db.all('SELECT * FROM nature WHERE id >= ? and id <= ?', [1,100], function(err, resultSet) {
        db.all('SELECT * FROM nature WHERE id=?', [1], function(err, resultSet) {
            console.log('Result set is:', resultSet);
        }, function(error) {
            console.log("SELECT FROM TABLE ERROR", error);
        });
    }, function(error) {
        console.log("OPEN DB ERROR", error);
    });

    var topmost = frameModule.topmost();
    topmost.navigate("views/nature/nature");

}