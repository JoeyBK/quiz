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
        correctAnswer: 1
    },
    {
        question: "What planet are you from?",
        choices: [
            "Mars",
            "Venus",
            "Saturn",
            "Earth"
        ],
        correctAnswer: 3
    },
    {
        question: "What is 3 + 7?",
        choices: [
            6,
            9,
            10,
            -1
        ],
        correctAnswer: 2
    }
];


var q = document.getElementById("question");
var c = document.getElementById("choices");
var choice = Questions[0].choices;
q.innerHTML = Questions[0].question;

choice.forEach(function(e){
    var listItem = document.createElement('li');
    var text = document.createTextNode(e);
    listItem.appendChild(text);
    c.appendChild(listItem);
});




var i = 0;
function next() {
    if (i < Questions.length - 1) {

        i++;

        q.innerHTML = Questions[i].question;
        var choice = Questions[i].choices;
        c.innerHTML = '';

        choice.forEach(function(e){
            var listItem = document.createElement('li');
            var text = document.createTextNode(e);
            listItem.appendChild(text);
            c.appendChild(listItem);
        });
    }
}

var button = document.getElementById('next');

button.onclick = function () {
    next();
};
