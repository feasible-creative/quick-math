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




function playGame(){



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
// console.log(num1);
// console.log(num2);
})




// Array values

// const answers = ["a", "b", "c", "d"];
answers = []


button.addEventListener('click', function(){
  answers =[];
  a = parseInt(num1) + parseInt(num2);
  b = parseInt(num1)+parseInt(num2)-(Math.floor(Math.random() * 3)+2);
  c = parseInt(num1)+parseInt(num2)+(Math.floor(Math.random() * 3)+1);
  d = parseInt(num1)+parseInt(num2)-(Math.floor(Math.random() * 1)+1);
  answers.push(a, b, c, d);
  // console.log(answers);
})





  button.addEventListener('click', function(){
  for (let i = 0; i <= answers.length-1; i++){
  const answerChoice = document.getElementById('answer'+(i+1));
  answerChoice.textContent = answers[Math.floor(Math.random() * 4)]};

  // console.log(answers);
  console.log(Math.floor(Math.random() * 4));
  console.log(answers[Math.floor(Math.random() * 4)]);
  // button.addEventListener('click', function(){
  // console.log(`${a} is it`)
    })
  












}

playGame();


// answers.push(a);
// answers.push(b);
// answers.push(c);



// for (let i = 0; i <= answers.length-1; i++){

//   button.addEventListener('click', function(){
//     console.log(answers);
//   const answer = document.getElementById('answer'+(i+1));
//   answer.textContent = answers[Math.floor(Math.random() * 4)+1]})};


//   button.addEventListener('click', function(){
//   console.log(`${a} is it`)
//     })
  





// button.addEventListener('click', function(){
//   const answer1 = document.getElementById('answer1');
//   answer1.textContent = a;
  
//         })

        
// button.addEventListener('click', function(){
//   const answer2 = document.getElementById('answer2');
//   answer2.textContent = b;
  
//         })


// button.addEventListener('click', function(){
// const answer1 = document.getElementById('answer3');
// answer1.textContent = c;
                  
//           })
                              
        
// button.addEventListener('click', function(){
// const answer1 = document.getElementById('answer4');
// answer1.textContent = d;
                    
//             })
                    





















// Outputs correct answer to console

// button.addEventListener('click', function(){
// console.log(parseInt(num1)+parseInt(num2));
//   })
  








  
        
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













