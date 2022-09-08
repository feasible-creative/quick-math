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

button.addEventListener('click', function nextQuestion(){
  return num1 = Math.floor(Math.random() * 25).toString();
  
})

button.addEventListener('click', function nextQuestion(){
  return num2 = Math.floor(Math.random() * 25).toString();
})


button.addEventListener('click', function(){
  return mathQuestion.textContent = `${num1} + ${num2}`;

})

button.addEventListener('click', function(){
console.log(num1);
console.log(num2);
})










//  const mathQuestion = document.querySelector('#question');
//   mathQuestion.textContent = "HI";
  






