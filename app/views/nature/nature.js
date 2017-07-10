var frameModule = require("ui/frame");

var page;

exports.loaded = function(args) {
    // Get a reference to the current page.
    page = args.object;
    console.log("PAGE", page);
};

exports.onNavBtnTap = function() {
    // This code will be called only in Android.
    var topmost = frameModule.topmost();
    topmost.navigate("views/main/main");
}

exports.moreInfo = function() {

    // Access the name of the selected animal to include in the url as the search term.
    var url = "https://simple.wikipedia.org/w/api.php?action=query&list=search&srlimit=15&srsearch=" + "butterfly"  + "&format=json&prop=revisions&origin=*";

    fetch(url, {
	    method: 'GET'
    }).then(function(response) {
       console.dir(response); // The simple.wikipedia.org results print to the console.
       // var title = response.query.search[0].title;
       // var snippet = response.query.search[0].snippet;
       // console.log(title);
       // console.log(snippet);
    });

    var topmost = frameModule.topmost();
    topmost.navigate("views/nature/nature");
}