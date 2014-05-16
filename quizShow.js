/**
 * Created by jazoulai on 5/8/14.
 */
var allQuestions = [
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
        correctAnswer: 3
    }
];

function inheritPrototype(childObject, parentObject) {
    // As discussed above, we use the Crockford’s method to copy the properties and methods from the parentObject onto the childObject
// So the copyOfParent object now has everything the parentObject has
    var copyOfParent = Object.create(parentObject.prototype);

    //Then we set the constructor of this new object to point to the childObject.
// Why do we manually set the copyOfParent constructor here, see the explanation immediately following this code block.
    copyOfParent.constructor = childObject;

    // Then we set the childObject prototype to copyOfParent, so that the childObject can in turn inherit everything from copyOfParent (from parentObject)
    childObject.prototype = copyOfParent;
}

function MultipleChoiceQuestion(theQuestion, theChoices, theCorrectAnswer){
    Question.call(this, theQuestion, theChoices, theCorrectAnswer);
}

inheritPrototype(MultipleChoiceQuestion, Question);


function Question(theQuestion, theChoices, theCorrectAnswer){
    this.question = theQuestion;
    this.choices = theChoices;
    this.correctAnswer = theCorrectAnswer;
    this.userAnswer = '';
}

Question.prototype.getCorrectAnswer = function() {
    return this.correctAnswer;
};

Question.prototype.getUserAnswer = function(){
    var radio = document.getElementsByName('choice');
    for(var i=0; i < radio.length; i++){
        if(radio[i].checked){
            return radio[i].value;
        }
    }
};

Question.prototype.displayQuestion = function(){
    var questionToDisplay = '<div class="question">' + this.question + '</div><ul>';
    choiceCounter = 0;
    var quizDiv = document.getElementById('quiz');
    this.choices.forEach(function(eachChoice){
        questionToDisplay += '<li><input type="radio" name="choice" value="' + choiceCounter + '">' + eachChoice + '</li>';
        choiceCounter++
    });
    questionToDisplay += '</ul>';
    quizDiv.innerHTML = questionToDisplay;
};



var i = 0;
Question.prototype.loadQuestion = function(){
    if(i < allQuestions.length){
        var quest = new MultipleChoiceQuestion(allQuestions[i].question, allQuestions[i].choices, allQuestions[i].correctAnswer);
        quest.displayQuestion();
        i++;
    }
};

Question.prototype.tallyScore = function(){
    console.log(Question.prototype.getUserAnswer());
};

Question.prototype.loadQuestion();

var button = document.getElementById('next');

button.onclick = function(){
    Question.prototype.tallyScore();
    Question.prototype.loadQuestion();
};