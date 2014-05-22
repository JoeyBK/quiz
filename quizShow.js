$(document).ready(function(){

    function returnAjax (){
        return $.get('catherine.json');
    }

    returnAjax().done(function(allQuestions){

        var quizEngine = {};
        quizEngine.currentQuestionIndex = 0;
        quizEngine.score = 0;
        quizEngine.questionDiv = $('#question');
        quizEngine.answersDiv = $('#answers');

        quizEngine.run_quiz = function () {
            if (this.currentQuestionIndex < allQuestions.length) {
                this.clear_question();
                this.print_question();
                this.print_answers();
            } else {
                this.compute_score();
            }
        };

        quizEngine.print_question = function () {
            var currentQuestion = allQuestions[quizEngine.currentQuestionIndex];
            var theTemplateScript = $("#questionTemplate").html();
            var theTemplate = Handlebars.compile(theTemplateScript);
            quizEngine.questionDiv.append(theTemplate(currentQuestion));
        };

        quizEngine.print_answers = function () {
            var currentChoices = allQuestions[quizEngine.currentQuestionIndex];
            var theTemplateScript = $("#choicesTemplate").html();
            var theTemplate = Handlebars.compile(theTemplateScript);
            var temp = quizEngine.answersDiv.append(theTemplate(currentChoices));
        };

        quizEngine.compute_score = function () {
            quizEngine.clear_question();
            if(quizEngine.score >= 3){
                $('#score').html("Smarty-pants! You answered " + quizEngine.score + " out of " + allQuestions.length + " questions correctly!");
            }else{
                $('#score').html("You're dumb! You answered " + quizEngine.score + " out of " + allQuestions.length + " questions correctly!");
            }
        };

        quizEngine.next_question = function () {
            quizEngine.check_answer();
            quizEngine.currentQuestionIndex++;
            quizEngine.run_quiz();
        };

        quizEngine.clear_question = function () {
            quizEngine.questionDiv.children().remove();
            quizEngine.answersDiv.children().remove();
        };

        quizEngine.check_answer = function () {
            var radios = quizEngine.answersDiv.find('input');
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].checked) {
                    var value = radios[i].id;
                    var correct_answer_index = allQuestions[quizEngine.currentQuestionIndex].correctAnswer;
                    var currentCorrectAnswer = allQuestions[quizEngine.currentQuestionIndex].choices[correct_answer_index];
                    if (value == currentCorrectAnswer) {
                        quizEngine.score++;
                    } else {
                        alert("wrong answer!");
                    }
                }
            }
        };

        quizEngine.run_quiz();

        $("#button").on('click', function(){
            quizEngine.next_question();
        });

    });
});