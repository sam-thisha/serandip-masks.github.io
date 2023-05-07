let timeLeft = document.querySelector(".timer-left");
let quizContainer = document.getElementById("quiz-container");
let nextBtn = document.getElementById("next-btn");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart-btn");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startBtn = document.getElementById("start-btn");

let questionCount;
let scoreCount = 0;
let count = 11;
let countDown;
let totalTime=0;

const quizArray = [
    {
        question: "What are Ceylon masks?",
        options: [
            "Masks used for Halloween",
            "Masks used for Sri Lankan dance performances",
            "Masks used in medical settings",
            "Masks used for scuba diving"
        ],
        correct: "Masks used for Sri Lankan dance performances"
    },
    {
        question: "What is the purpose of wearing a Ceylon mask in traditional Sri Lankan culture?",
        options: [
            "To scare away evil spirits",
            "To protect the wearer from disease",
            "To make the wearer look more beautiful",
            "To help the wearer see better in bright sunlight"
        ],
        correct: "To scare away evil spirits"
    },
    {
        question: "Which of the following is not a traditional character depicted in Ceylon masks?",
        options: [
            "Devil",
            "King",
            "Eagle",
            "Cobra"
        ],
        correct: "Eagle"
    },
    {
        question: "What material are traditional Ceylon masks made of?",
        options: [
            "Plastic",
            "Wood",
            "Metal",
            "Glass"
        ],
        correct: "Wood"
    },
    {
        question: "What is the name of the village in Sri Lanka known for its production of Ceylon masks?",
        options: [
            "Colombo",
            "Kandy",
            "Galle",
            "Ambalangoda"
        ],
        correct: "Ambalangoda"
    },
    {
        question: "What are the two main types of Ceylon masks?",
        options: [
            "Human and animal masks",
            "Happy and sad masks",
            "Colorful and plain masks",
            "Big and small masks"
        ],
        correct: "Human and animal masks"
    },
    {
        question: "What are the colors commonly used in Ceylon masks?",
        options: [
            "Red, blue, and green",
            "Black, white, and gray",
            "Yellow, orange, and purple",
            "All of the above"
        ],
        correct: "Red, blue, and green"
    },
    {
        question: "Which festival is known for the use of Ceylon masks in Sri Lanka?",
        options: [
            "Diwali",
            "Vesak",
            "Kandy Esala Perahera",
            "Christmas"
        ],
        correct: "Kandy Esala Perahera"
    },
    {
        question: "What is the name of the wood commonly used to make Ceylon masks?",
        options: [
            "Teak wood",
            "Mahogany wood",
            "Ebony wood",
            "Kaduru wood"
        ],
        correct: "Kaduru wood"
    },
    {
        question: 'What is the meaning of the term "Ceylon" in the name "Ceylon masks"?',
        options: [
            "A type of wood",
            "The name of a person who created the masks",
            "The former name of Sri Lanka",
            "The name of a town where the masks are made"
        ],
        correct: "The former name of Sri Lanka"
    }
];

window.onload=()=>{
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};

startBtn.addEventListener("click",()=>{
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial()
});

restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

nextBtn.addEventListener("click", (displayNext = () => {
    questionCount += 1;

    if (questionCount == quizArray.length) {
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML = "Your Score is " + scoreCount 
        + " out of " + questionCount
        +"<br> You Spend "+totalTime+" seconds";
    } else {
        countOfQuestion.innerHTML = questionCount + 1 + " of " + quizArray.length + " Question";

        quizDisplay(questionCount);
        count = 11;
        clearInterval(countDown);
        timerDisplay();
    }
}));

const timerDisplay = () => {
    countDown = setInterval(() => {
        count--;
        totalTime++;
        timeLeft.innerHTML = ` ${count}s`;
        if (count == 0) {
            clearInterval(countDown);
            displayNext();
        }
    }, 1000);
};

const quizDisplay = (questionCount) => {
    let quizCard = document.querySelectorAll(".container-mid");
    quizCard.forEach((card) => {
        card.classList.add("hide");
    });
    quizCard[questionCount].classList.remove("hide");
};

function quizCreator() {

    for (let i of quizArray) {

        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");

        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";

        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);

        div.innerHTML += `
        <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[3]}</button>`;

        quizContainer.appendChild(div);
    }
}

function checker(userOption) {
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options=question.querySelectorAll(".option-div");
    console.log(options);
    if(userSolution=== quizArray[questionCount].correct){
        userOption.classList.add("correct");
        scoreCount++;
    }else{
        userOption.classList.add("incorrect");


        options.forEach((element)=>{
            if(element.innerText==quizArray[questionCount].correct){
                element.classList.add("correct")
            }
        });
    }
    clearInterval(countDown);
    options.forEach((element)=>{
        element.disabled=true;
    });
}

function initial(){
    quizContainer.innerHTML="";
    questionCount=0;
    scoreCount=0;
    count=11;
    clearInterval(countDown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}



