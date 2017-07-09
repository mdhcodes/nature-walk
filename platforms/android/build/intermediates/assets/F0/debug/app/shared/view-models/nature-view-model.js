var observable = require("data/observable");
var ObservableArray = require("data/observable-array");
var Sqlite = require( "nativescript-sqlite" );

function natureViewModel(database) {

    var viewModel = new observable();

    viewModel.results = new ObservableArray([]);
    
    //viewModel.facts = function() {        

        // Display specified data from the nature_walk.db - Get id of the animal or plant image clicked.
        //viewModel.name = "";
        //viewModel.description = ""; //Descriptions from simple.wikipedia.org and en.wikipedia.org
        //viewModel.link = "";
        // Additional articles / links Will be displayed after the fetch() from simple.wikipedia.org

    //}

    

    return viewModel;

}

exports.natureViewModel = natureViewModel;