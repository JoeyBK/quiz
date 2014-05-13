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

/*var EventUtil = {

    addHandler: function(element, type, handler){
        if(element.addEventListener){
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent){
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] + handler;
        }
    },

    removeHandler: function(element, type, handler){
        if(element.removeEventListener){
            element.removeEventListener(type, hanlder, false);
        } else if (element.detachEvent){
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    }

};*/

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
            listItem.setAttribute('onclick', 'answer(this);');
            label.setAttribute('for', e);
            label.innerHTML = e;
            choiceDiv.appendChild(listItem);
            choiceDiv.appendChild(label);
            choiceDiv.appendChild(brake);
        });
}
}



next();

button.onclick = function () {
    next();
};

/*form.elements[0].onclick = function(){
    form.elements[0].checked=true;
        if(radios[0].checked){
            alert('hi');
        }
};*/

function answer(selection){

    selection.checked=true;

    for(var i = 0; i < radios.length; i++){
        if(radios[i].checked){
            console.log(radios[i].id);
            break;
        }
    }

}