var frameModule = require("ui/frame");

exports.loaded = function(args) {
    var page = args.object;
};

exports.choose_animals = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/animals/animals");
}

exports.choose_plants = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/plants/plants");
}