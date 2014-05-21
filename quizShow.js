$(document).ready(function(){

    function returnAjax (){
        return $.get('all_questions.json');
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
            var currentQuestion = allQuestions[this.currentQuestionIndex].question;
            var currentQuestionHtml = '<p>' + currentQuestion + '</p>';
            quizEngine.questionDiv.html(currentQuestionHtml);
    };

        quizEngine.print_answers = function () {
            var currentChoices = allQuestions[this.currentQuestionIndex].choices;
            currentChoices.forEach(function (e) {
                var currentChoicesHtml = '';
                currentChoicesHtml += '<input type="radio"';
                currentChoicesHtml += 'name="currentAnswer"';
                currentChoicesHtml += 'class="radioAnswer"';
                currentChoicesHtml += 'value="' + e + '">';
                currentChoicesHtml += '<label for="'+e+'">';
                currentChoicesHtml += e;
                currentChoicesHtml += '</label><br>';
                quizEngine.answersDiv.append(currentChoicesHtml);
            });
        };

        quizEngine.compute_score = function () {
            quizEngine.clear_question();
            $('#score').html("Your score: " + quizEngine.score);
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
                    var value = radios[i].value;
                    var correct_answer_index = allQuestions[quizEngine.currentQuestionIndex].correctAnswer;
                    var currentCorrectAnswer = allQuestions[quizEngine.currentQuestionIndex].choices[correct_answer_index];
                    if (value == currentCorrectAnswer) {
                        quizEngine.score++;
                    } else {
                        console.log("wrong answer");
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