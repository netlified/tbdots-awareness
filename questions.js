

// code by webdevtrick (https://webdevtrick.com)
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("Which of the following diagnostics tests is intended for latent tuberculosis infection?", ["Sputum smear microscopy", "Polymerase chain reaction (PCR)","Interferon-gamma release assay (lGRA)", " ELISAfor TB antibodies"], "Interferon-gamma release assay (lGRA)"),
    new Question("Which of the following diagnostics tests can be used to diagnose drug resistant tuberculosis?", ["Sputum smear microscopy", "Liquid culture", "Interferon-gamma release assay (IGRA)", "Chest X-ray"], "Liquid culture"),
    new Question("The ideal clinical specimen for pulmonary TB diagnosis is:", ["Blood", "Sputum","Urine", "Tissue"], "Sputum"),
    new Question("What is the ideal location for sputum collection?", ["Inside the doctor's clinic", "Inside the laboratory", "Outdoors or in a well ventilated area", "The patient's bathroom with the door closed"], "Outdoors or in a well ventilated area"),
    new Question("Which of the following constitutes a good sample for sputum microscopy?", ["5 ml of muco-purulent sputum", "5 ml of clear saliva", "2 ml of sputum in a washed food container", "All of the above"], "5 ml of muco-purulent sputum")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();