
var observableModule = require("data/observable");
var Sqlite = require( "nativescript-sqlite" );

function FactsViewModel(database) {

    var viewModel = new observableModule();

    viewModel.name = "";
    viewModel.description = ""; //Descriptions from simple.wikipedia.org and en.wikipedia.org
    viewModel.link = "";
    // Additional articles / links Will be displayed after the fetch() from simple.wikipedia.org

    

    return viewModel;

}

exports.FactsViewModel = FactsViewModel;