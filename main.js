function madliberize(){

    //get inputs by id
    var firstNounInput = document.getElementById('noun-one');
    var adjectiveInput = document.getElementById('adjective');
    var verbInput = document.getElementById('verb');
    var secondNounInput = document.getElementById('noun-two');
    var bodyPartInput = document.getElementById('body-part');
    var adverbInput = document.getElementById('adverb');
    
    //get values out of input
    var nounOne = firstNounInput.value;
    
    var adjOne= adjectiveInput.value;
    
    var verbOne = verbInput.value;
    
    var nounTwo = secondNounInput.value;
    
    var bodyBit = bodyPartInput.value;
    
    var adverbOne = adverbInput.value;
    console.log (adverbInput.value)

// make greeting
var greeter = 'Please add one ' + nounOne + ' to your ' + adjOne + ' stew. Stir ' + verbOne + ' with your ' + nounTwo + '. Season with ' + bodyBit + ', then enjoy ' + adverbOne+ '!';

// display greeting
var hello = document.getElementById('hello');
hello.textContent = greeter;

//remove prompt

}

