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


// Outputs correct answer to console

button.addEventListener('click', function(){
console.log(parseInt(num1)+parseInt(num2));
  })
  




button.addEventListener('click', function(){
const answer1 = document.getElementById('answer1');
answer1.textContent = parseInt(num1)+parseInt(num2);

      })

button.addEventListener('click', function(){
const answer1 = document.getElementById('answer2');
answer1.textContent = parseInt(num1)+parseInt(num2)-(Math.floor(Math.random() * 3)+2);
        
})
      

button.addEventListener('click', function(){
  const answer1 = document.getElementById('answer3');
  answer1.textContent = parseInt(num1)+parseInt(num2)+(Math.floor(Math.random() * 3)+1);
          
  })
          

      

  button.addEventListener('click', function(){
  const answer1 = document.getElementById('answer4');
  answer1.textContent = parseInt(num1)+parseInt(num2)-(Math.floor(Math.random() * 1)+1);
            
    })
            
  
        
const answerButton = document.querySelector('#answer1')

answerButton.addEventListener('click', function correctAnswer(){
mathQuestion.textContent = "CORRECT!"
})



const answerButton2 = document.querySelector('#answer2')

answerButton2.addEventListener('click', function correctAnswer(){
mathQuestion.textContent = "Wrong!"
})


const answerButton3 = document.querySelector('#answer3')

answerButton3.addEventListener('click', function correctAnswer(){
mathQuestion.textContent = "Wrong!"
})


const answerButton4 = document.querySelector('#answer4')

answerButton4.addEventListener('click', function correctAnswer(){
mathQuestion.textContent = "Wrong!"
if (mathQuestion.textContent){
  console.log('GAME OVER')
};
})













