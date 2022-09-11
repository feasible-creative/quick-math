// 1. Display rnadom math problem
// 2. Timer starts at 0:10
// 3. Input answer
// 4. If correct, add +1 to score and continue to next question
// 5. If incorrect [GAME OVER] - option to restart





const mathQuestion = document.querySelector('#question');
const button = document.querySelector('#questionButton')


function playGame() {
  button.addEventListener('click', function nextQuestion() {
    num1 = Math.floor(Math.random() * 25).toString();
    num2 = Math.floor(Math.random() * 25).toString();
    mathQuestion.textContent = `${num1} + ${num2}`;

  })


  // Array values
  button.addEventListener('click', function () {
    answers = [];
    a = parseInt(num1) + parseInt(num2);
    b = parseInt(num1) + parseInt(num2) - (Math.floor(Math.random() * 3) + 1);
    c = parseInt(num1) + parseInt(num2) + (Math.floor(Math.random() * 2) + 1);
    d = parseInt(num1) + parseInt(num2) - (Math.floor(Math.random() * 2) + 3);
    answers.push(a, b, c, d);

    // Debugger for unique outputs only

    // if (a === b || b === c || c === d){
    //   console.log('ERROR')
    // }
    // else{console.log('success!')}

  });



  // Output answer options in ABCD order







  // const samples = [1, 2, 3, 4];

  // function shuffle(array) {
  
  //   shuffledArray = [];
  //   usedIndexes = [];
  
  
  
  //   let i = 0;
  //   while (i < array.length){
  //     let randomNumber = Math.floor(Math.random() * array.length);
  //     if (!usedIndexes.includes(randomNumber)){
  //       shuffledArray.push(array[randomNumber]);
  //       usedIndexes.push(randomNumber);
  //       i++;
  //     }
  //   }
    
  //   console.log(shuffledArray);
  //   return shuffledArray
  
  
  // }
  
  // shuffle(samples);
  
  





  button.addEventListener('click', function addToOptions() {

    for (let i = 0; i <= answers.length - 1; i++) {
      answerChoice = document.getElementById('answer' + (i + 1))
      answerChoice.textContent = answers[i];

    }


  }
  )




  // button.addEventListener('click', function addToOptions(answers){
  //   for (var i = answers.length - 1; i > 0; i--) {
  //     var j = Math.floor(Math.random() * (i + 1));

  //        var temp = answers[i];
  //        answers[i] = answers[j];
  //        answers[j] = temp;
  //    }
  //    return answers;  


  // })


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















