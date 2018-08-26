var deleteSearchBtn = document.getElementById('deleteSearch');
var searchText = document.getElementById('searchText');

var deleteSearchText = function() {
    searchText.value = "";
}


var tips = document.querySelectorAll('.tip a');

var featuresBtn = document.querySelector('[for="features"]');

var lastButtonActive = 'temp';
var onTip = function(inputId) {
    var button = document.querySelector('label[for="' + inputId + '"]');
    button.htmlFor = lastButtonActive;
    lastButtonActive = inputId;
    
}