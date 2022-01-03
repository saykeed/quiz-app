let quizData = [
    {
        question: 'Who is the President of Nigeria',
        a: 'Goodluck Jonathan',
        b: 'Sanyeri',
        c: 'Muhammed Buhari',
        d: 'i dont know oooo',
        correct: 'c'
    },{
        question: 'When did Nigeria gained Independent',
        a: '1990',
        b: '2020',
        c: '1960',
        d: 'i dont know oooo',
        correct: 'c'
    },{
        question: 'How many stated do we have in Nigeria',
        a: '36',
        b: '22',
        c: '46',
        d: 'i dont know oooo',
        correct: 'a'
    },{
        question: 'What is the meaning of WHO',
        a: 'World Health Organism',
        b: 'World Health Organisation',
        c: 'World House Organization',
        d: 'i dont know oooo',
        correct: 'b'
    }
];


// declaring our global variables
let getQuestion = document.querySelector("#question h2");
let getOptionA = document.querySelector("#opt_a");
let getOptionB = document.querySelector("#opt_b");
let getOptionC = document.querySelector("#opt_c");
let getOptionD = document.querySelector("#opt_d");
let getSubmitBtn = document.querySelector("#submit");
let options = document.querySelectorAll(".ans");
let currentQuiz = 0;
let mark = 0;



// the function that loads in the quiz
let loadQuiz = function () {
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
    getQuestion.innerText = quizData[currentQuiz].question;
    getOptionA.innerText = quizData[currentQuiz].a;
    getOptionB.innerText = quizData[currentQuiz].b;
    getOptionC.innerText = quizData[currentQuiz].c;
    getOptionD.innerText = quizData[currentQuiz].d;
}




// the function that retuns the option chosen by the user
let optionSelected = function () {
    let answer = undefined;
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            answer = options[i].id
        }
    }
    return answer;
}



// the function that loads the next quiz and submit when quiz is over
let nextQuiz = function () {
    let optionChosen = optionSelected();
    if (optionChosen === quizData[currentQuiz].correct) {
        mark++
    }

    if (optionChosen == undefined) {
        alert("please select an answer from the options listed below")
    } else {
        currentQuiz++;
        if (currentQuiz < quizData.length-1) {
            loadQuiz();
        } else if (currentQuiz == quizData.length-1) {
            loadQuiz();
            getSubmitBtn.innerText = "Submit"
        } else{
            alert("you got " + mark + " over " + quizData.length);
            location.reload();
        }
    
    }
}






window.onload = loadQuiz();