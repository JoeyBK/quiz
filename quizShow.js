/**
 * Created by jazoulai on 5/8/14.
 */
var Questions =[
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


var div = document.getElementById("question");

window.onload = function(){

    div.innerHTML = Questions[0].question;


    function next(){

        div.innerHTML = Questions[1].question;
    }


    var button = document.getElementById('next');

    button.onclick = function(){
        next();
    };

};
