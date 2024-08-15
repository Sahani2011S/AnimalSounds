function start(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    SoundClassifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ai31_v9pd/model.json', modelLoaded);
}
function modelLoaded() {
SoundClassifier.classify(gotResults)
}
var dog = 0;
var cat = 0;
var cow = 0;
var lion = 0;

function gotResults(error, result){
if (error) {
    console.error(error);
}else{
    console.log(result);
    document.getElementById("listening").innerHTML = "I Can Hear - " + result[0].label;
    document.getElementById("accuracy").innerHTML = "Detected Dog Count - " + dog + "   Detected Cat Count - " + cat + "   Detected Cow Count - " + cow + "   Detected Lion Count - " + lion;
    img1 = document.getElementById("ear");

    if(result[0].label == "Meowing"){
        img1.src = 'cat.gif';
        cat = cat + 1;
    }
    else if(result[0].label == "Barking"){
        img1.src = 'dog.gif';
        dog = dog + 1;
    }
    else if(result[0].label == "Mooing"){
        img1.src = 'cute-cow.gif';
        cow = cow + 1;
    }
    else if(result[0].label == "Roar"){
        img1.src = 'cute-lion.gif'
        lion = lion + 1;
    }
    else{
        img1.src = 'ear.gif';
    }
    }
}