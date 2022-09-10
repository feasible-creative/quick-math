// 1. Display rnadom math problem
// 2. Timer starts at 0:10
// 3. Input answer
// 4. If correct, add +1 to score and continue to next question
// 5. If incorrect [GAME OVER] - option to restart





const mathQuestion = document.querySelector('#question');

const button = document.querySelector('#questionButton')

// button.addEventListener('click', function nextQuestion(){
//   return test = mathQuestion.textContent = `${Math.floor(Math.random() * 25).toString()} + ${Math.floor(Math.random() * 25).toString()}`;


// })




function playGame() {



  button.addEventListener('click', function nextQuestion() {
    num1 = Math.floor(Math.random() * 25).toString();
    num2 = Math.floor(Math.random() * 25).toString();
    mathQuestion.textContent = `${num1} + ${num2}`;

  })




  button.addEventListener('click', function () {
    // console.log(num1);
    // console.log(num2);
  })




  // Array values

  // const answers = ["a", "b", "c", "d"];
  answers = []


  button.addEventListener('click', function () {
    answers = [];
    a = parseInt(num1) + parseInt(num2);
    b = parseInt(num1) + parseInt(num2) - (Math.floor(Math.random() * 3) + 2);
    c = parseInt(num1) + parseInt(num2) + (Math.floor(Math.random() * 3) + 1);
    d = parseInt(num1) + parseInt(num2) - (Math.floor(Math.random() * 1) + 1);
    answers.push(a, b, c, d);
    // console.log(answers);
  })

  button.addEventListener('click', function () {
    numbersPicked = []
    for (let i = 0; i <= answers.length - 1; i++) {
      randomNum = Math.floor(Math.random() * 4);
      
      if(randomNum !== numbersPicked){
        const answerChoice = document.getElementById('answer' + (i + 1));
        answerChoice.textContent = answers[randomNum];
        numbersPicked.push(randomNum);
      };

      console.log(numbersPicked);
    };


    // console.log(Math.floor(Math.random() * 4));
    // console.log(answers[Math.floor(Math.random() * 4)]);

  })













}

playGame();





























// const answerButton = document.querySelector('#answer1')

// answerButton.addEventListener('click', function correctAnswer(){
// mathQuestion.textContent = "CORRECT!"
// })



// const answerButton2 = document.querySelector('#answer2')

// answerButton2.addEventListener('click', function correctAnswer(){
// mathQuestion.textContent = "Wrong!"
// })


// const answerButton3 = document.querySelector('#answer3')

// answerButton3.addEventListener('click', function correctAnswer(){
// mathQuestion.textContent = "Wrong!"
// })


// const answerButton4 = document.querySelector('#answer4')

// answerButton4.addEventListener('click', function correctAnswer(){
// mathQuestion.textContent = "Wrong!"
// if (mathQuestion.textContent){
//   console.log('GAME OVER')
// };
// })













