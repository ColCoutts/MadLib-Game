function madliberize(){

    //get inputs by id
    var firstNounInput = document.getElementById('noun-one')
    //adding "red" color style here produces red in input box
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
    
    // here trying to swap in input values and change text color
    
    
    // make greeting
    var greeter = `Please add one <span style="color:blue">${nounOne}</span> to your <span style="color:blue">${adjOne}</span> stew. Stir <span style="color:blue">${verbOne}</span> with your <span style="color:blue">${nounTwo}</span>. Season with <span style="color:blue">${bodyBit}</span>, then enjoy <span style="color:blue">${adverbOne}</span> !`;
    
    var newColor = document.getElementById('hello').style.color = ('red');
    
    // display greeting
    
    var hello = document.getElementById('hello');
    hello.innerHTML = greeter;
}

