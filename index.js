



const questions=[
    {
        question:'Which country is known as the Land of The Rising Sun?',
        answer:[
            {text:'America' ,Correct: false},
            {text: 'India' ,Correct: false},
            {text: 'China' ,Correct: false},
            {text: 'Japan' ,Correct: true}
        ]

        
    },{
        question: 'What is the capital of Australia?',
        answer: [
            {text: 'Sydney', Correct: false},
            {text: 'Melbourne', Correct: false},
            {text: 'Canberra', Correct: true},
            {text: 'Brisbane', Correct: false}
        ]
    },{
        question: 'Which planet is known as the Red Planet?',
        answer: [
            {text: 'Venus', Correct: false},
            {text: 'Jupiter', Correct: false},
            {text: 'Mars', Correct: true},
            {text: 'Saturn', Correct: false}
        ]
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"?',
        answer: [
            {text: 'Charles Dickens', Correct: false},
            {text: 'William Shakespeare', Correct: true},
            {text: 'william Jones', Correct:false},
            {text: 'George Orwell', Correct: false},
            
        ]
    }
]

const question=document.getElementById('question');
const appbtn=document.getElementById('app-btn');
const finalbtn=document.getElementById('finalbtn');




let currentquestionindex=0;
let score=0;

 function startQuiz(){
    currentquestionindex=0;
    score=0;
    finalbtn.innerHTML="next";
    showquiz();
 }


 function showquiz(){
    restart();
    questionshow=questions[currentquestionindex];
    questionno=currentquestionindex+1;
    question.innerHTML=questionno + ':' + questionshow.question;

    questionshow.answer.forEach(answers => {
        const button=document.createElement('button');
        button.innerHTML=answers.text;
        button.classList.add('btn');
        appbtn.appendChild(button);
        if(answers.Correct){
           button.dataset.Correct=answers.Correct;
        }

        appbtn.addEventListener('click', checkans)

    });
 }

 function restart(){
     finalbtn.style.display='none';
     while(appbtn.firstChild){
     appbtn.removeChild(appbtn.firstChild)
     }
    }


 function checkans(e){
    const selectedans=e.target;
    const isCorrect= selectedans.dataset.Correct==='true';
    if(isCorrect){
        selectedans.classList.add('correct');
        score++;
    }
    else {
        selectedans.classList.add('incorrect');
    }
    Array.from(appbtn.children).forEach(button => {
        if(button.dataset.Correct==='true'){
            button.classList.add('correct');
        
        }
        button.disabled= true ;
    });
    finalbtn.style.display='block';

 }
    

 function showerror(){
     restart();
     question.innerHTML=`you got ${score} out of ${questions.length}`;
     finalbtn.innerHTML='Play Again';
     finalbtn.style.display='block';
 }


 function nextbutton(){
    currentquestionindex++;
    if(currentquestionindex<questions.length){
        showquiz();
    }
    else{
        showerror();
    }
 }


 finalbtn.addEventListener('click',()=>{
    if(currentquestionindex<questions.length){
        nextbutton();
    }
    else{
        startQuiz();
    }
 })
 showquiz();