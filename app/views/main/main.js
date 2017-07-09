var frameModule = require("ui/frame");

exports.loaded = function(args) {
    var page = args.object;
};

exports.butterfly = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/nature/nature");
}