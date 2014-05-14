/**
 * Created by jazoulai on 5/8/14.
 */
var Questions = [
    {
        question: "What city where you born in?",
        choices: [
            "San Antonio",
            "Brooklyn",
            "Chicago",
            "New Paltz"
        ],
        correctAnswer: "Brooklyn"
    },
    {
        question: "What planet are you from?",
        choices: [
            "Mars",
            "Venus",
            "Saturn",
            "Earth"
        ],
        correctAnswer: "Earth"
    },
    {
        question: "What is 3 + 7?",
        choices: [
            6,
            9,
            10,
            -1
        ],
        correctAnswer: 10
    }
];

var questionDiv = document.getElementById("question");
var choiceDiv = document.getElementById("choices");
var button = document.getElementById('next');
var form = document.getElementById('choices');
var radios = document.getElementsByName('multi');
var i = -1;

function next() {
    if (i < Questions.length - 1) {

        i++;

        questionDiv.innerHTML = Questions[i].question;
        var choice = Questions[i].choices;

        choiceDiv.innerHTML = '';


        choice.forEach(function(e){
            var listItem = document.createElement('input');
            var label = document.createElement('label');
            var brake = document.createElement('br');
            listItem.setAttribute('type', 'radio');
            listItem.setAttribute('name', 'multi');
            listItem.setAttribute('id', e);
            label.setAttribute('for', e);
            label.innerHTML = e;
            choiceDiv.appendChild(listItem);
            choiceDiv.appendChild(label);
            choiceDiv.appendChild(brake);
        });
    }
}


var j = 0;
function answer(){
    var correct = Questions[j].correctAnswer;
    if(j < Questions.length){
        j++;
    }
    for(var i = 0; i < radios.length; i++){
        if(radios[i].checked){
            if(radios[i].id == correct){
                console.log('good job!');
            } else {
                console.log('try again!');
            }

        }
    }

}



next();

button.onclick = function () {
    answer();
    next();
};

