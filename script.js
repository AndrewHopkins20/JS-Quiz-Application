//Title: Script.js
//last edited: 03/11//23
//author: Andrew Hopkins
//about: javascript for the quiz



const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex,  score

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startQuiz(){
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    console.log('Your Score is ' + score)
    setNextQuestion()

}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button =document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button=> {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct){
clearStatusClass(element)
if(correct){
    element.classList.add('correct')
    score++
} else {
    element.classList.add('wrong')
}
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [ 
    {
        question: 'In Greys Anatomy who does Meridith Marry?',
        answers: [
            {text: 'Derek Shepherd', correct: true},
            {text: 'Owen Hunt', correct: false},
            {text: 'Preston Burke', correct: false},
            {text: 'Miranda Bailey', correct: false}
        ]
    },
    {
        question: 'Which of These Iconic Horror Villains Was Played By Tony Todd?',
        answers: [
            {text: 'Jason', correct: false},
            {text: 'Freddy Kreuger', correct: false},
            {text: 'Pinhead', correct: false},
            {text: 'Candyman', correct: true}
        ]




    }
]