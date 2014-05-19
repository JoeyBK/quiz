//define questions
var allQuestions = [
    {
        question    : "Before it was named JavaScript, what was the language called?",
        choices     : ["TypeScript", "Java", "JScript", "LiveScript"],
        correctAnswer      : 3
    },
    {
        question    : "Who did originally develop JavaScript?",
        choices     : ["Bill Gates", "Brendan Eich", "Douglas CrockFord", "Nicholas Zakas", "Steve Jobs"],
        correctAnswer      : 1
    },
    {
        question    : "Which browser was the first to implement JavaScript?",
        choices     : ["Internet Explorer", "Netscape Navigator", "Opera"],
        correctAnswer      : 1
    },
    {
        question    : "Microsoft called JavaScript something else to avoid trademark issues. What was that name?",
        choices     : ["MicroScript", "IEScript", "VBScript", "JScript", "BasicScript"],
        correctAnswer      : 3
    }
];





var quizEngine = {};
quizEngine.currentQuestionIndex = 0;
quizEngine.score = 0;
quizEngine.questionBox = document.getElementById("question");
quizEngine.answersBox = document.getElementById("answers");
quizEngine.scoreBox = document.getElementById("score");
quizEngine.button = document.getElementById("button");

quizEngine.run_quiz = function(){
    if(this.currentQuestionIndex < allQuestions.length){
        this.clear_question();
        this.print_question();
        this.print_answers();
    }else{
        this.compute_score();
    }
};

quizEngine.print_question = function(){
        quizEngine.questionBox.innerHTML = allQuestions[this.currentQuestionIndex].question;
};

quizEngine.print_answers = function(){
  var choice = allQuestions[this.currentQuestionIndex].choices;
    choice.forEach(function(e){
        var listItem = document.createElement('input');
        var label = document.createElement('label');
        var brake = document.createElement('br');
        listItem.setAttribute('type', 'radio');
        listItem.setAttribute('name', 'currentAnswer');
        listItem.setAttribute('class', "radioAnswer");
        listItem.setAttribute('value', e);
        label.setAttribute('for', e);
        label.innerHTML = e;
        quizEngine.answersBox.appendChild(listItem);
        quizEngine.answersBox.appendChild(label);
        quizEngine.answersBox.appendChild(brake);
    });

};

quizEngine.compute_score = function(){
    quizEngine.clear_question();
    quizEngine.scoreBox.innerHTML = "Your score: " + quizEngine.score;
};

quizEngine.next_question = function(){
    quizEngine.check_answer();
    quizEngine.currentQuestionIndex ++;
    quizEngine.run_quiz();
};

quizEngine.clear_question = function(){
    quizEngine.questionBox.innerHTML = '';
    quizEngine.answersBox.innerHTML = '';
};

quizEngine.check_answer = function(){
    var radios = quizEngine.answersBox.getElementsByTagName('input');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {

            var value = radios[i].value;

            var correct_answer_index = allQuestions[quizEngine.currentQuestionIndex].correctAnswer;
            var currentCorrectAnswer = allQuestions[quizEngine.currentQuestionIndex].choices[correct_answer_index];

            if(value == currentCorrectAnswer){ //if correct increment score
                quizEngine.score ++;
            }else{
                console.log("wrong answer");
            }
        }
    }
};

quizEngine.run_quiz();



quizEngine.button.onclick = function(){
    quizEngine.next_question();

};
