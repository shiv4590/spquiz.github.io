const questions=[
    {
        question:"What is the average of first five multiples of 12?",
        
            answer :[
            {text:"36",correct:"true"},
            {text:"40",correct:"false"},
            {text:"42",correct:"false"},
            {text:"38",correct:"false"}
        
        ]
            
        
    },
    {
        question:" Average age of a group of 30 boys is 16 years. A boy of age 19 leaves the group and a new boy joins the group. If the new average age of the group is 15.8 years, find the age of the new boy.?",
        
        answer :[
        {text:"12year",correct:"false"},
        {text:"14year",correct:"false"},
        {text:"13year",correct:"true"},
        {text:"20year",correct:"false"}
    
    ]
    },
    {
        question:"If log10 x = a, log10 y = b, and log10 z = c, so (to base 10) the antilogarithm of pa+qb+rc would be?",
        
        answer :[
        {text:"Px + qy- rz",correct:"false"},
        {text:"xp yq zr(p,q,r in power)",correct:"true"},
        {text:"pxqy/rz",correct:"false"},
        {text:"5",correct:"false"}
    
    ]
    },
    {
        question:" Ayaan bought 30 kg of rice at the rate of Rs 9.50/ kg and 40 kg rice at the rate of Rs 8.50/kg and mixed them. He sold the mixture at the rate of Rs. 8.90/kg. Find his total profit or loss in the transaction.   ?",

     
        
        answer :[
        {text:"Rs 2 loss",correct:"true"},
        {text:"Rs 2 profit",correct:"false"},
        {text:"Rs 7 loss",correct:"false"},
        {text:"Rs 8 loss",correct:"false"}
    
    ]
    },
    {
        question:"A shopkeeper purchases some article at the rate of 2 articles for rupees 3 and purchases twice of the quantity at the rate of 3 articles for rupees 2. He sells them at the rate of 6 articles for rupees 7. Find the profit or loss %.?",
        
        answer :[
        {text:"36% loss",correct:"false"},
        {text:"40% profit",correct:"false"},
        {text:"23.52% profit",correct:"true"},
        {text:"38% pprofit",correct:"false"}
    
    ]
    },
    {
        question:"Worker A completes a task in 8 days and worker B completes the same task in 10 days. If both A and B work together, in how many days they will complete the task?",
        
        answer :[
        {text:"40/10 days",correct:"false"},
        {text:"40/9 days",correct:"true"},
        {text:"42/7 days",correct:"false"},
        {text:"38/6 days",correct:"false"}
    
    ]
    },
    {
        question:"A, B, and C undertakes to do work for Rs 707. A, and B together do 5/7 of the work and rest is done by C alone. How much should C get?",
        
        answer :[
        {text:"202",correct:"true"},
        {text:"205",correct:"false"},
        {text:"212",correct:"false"},
        {text:"328",correct:"false"}
    
    ]
    },
    {
        question:"A 60 liter mixture of milk and water contains 10% water. How much water must be added to make water 20% in the mixture?",
        
        answer :[
        {text:"36 litre",correct:"false"},
        {text:"7.5 litre",correct:"true"},
        {text:"42 litre",correct:"false"},
        {text:"38 litre",correct:"false"}
    
    ]
    },
    {
        question:"There are two numbers. HCF of both the numbers is 11, and their LCM is 693. If the first number is 77, find the second number?",
        
        answer :[
        {text:"36",correct:"false"},
        {text:"40",correct:"false"},
        {text:"99",correct:"true"},
        {text:"38",correct:"false"}
    
    ]
    },
    {
        question:"Two men do a piece of work for rupees 200. One alone can finish the work in 6 days, and the other can finish it in 8 days. With the help of a boy, they finish it in 3 days. How much money should be given to the boy?",
        
        answer :[
        {text:"25",correct:"true"},
        {text:"40",correct:"false"},
        {text:"42",correct:"false"},
        {text:"38",correct:"false"}
    
    ]
    },
{
    question:"A, B, and C together earn Rs 1350 in 9 days. A and C together earn Rs 470 in 5 days. B and C together earn 760 in 10 days. Find the daily earning of C.",

    
        
    answer :[
    {text:"20",correct:"true"},
    {text:"40",correct:"false"},
    {text:"42",correct:"false"},
    {text:"38",correct:"false"}

]
},
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("nextanswer");
const nextButton=document.getElementById("nextbutton");

let currentquestionindex=0;
let score=0;
function startQuiz()  {
    currentquestionindex=0;
    score=0;
    nextButton.innerHTML="next";
    showQuestion();
}
 function showQuestion(){
    resetState();
    let currentQuestion=questions[currentquestionindex];
    let questionNo=currentquestionindex+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question;
    currentQuestion.answer.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectedAnswer)

    });
}
    function resetState(){
        nextButton.style.display="none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    function selectedAnswer(e){
        const selectebtn=e.target;
      const isCorrect=  selectebtn.dataset.correct==="true"; 
      if(isCorrect){
        selectebtn.classList.add("correct");
        score++;
      }
      else{
        selectebtn.classList.add("incorrect");
      }
   
    Array.from(answerButtons.children).forEach(button=> {
     if(button.dataset.correct==="true"){
      button.classList.add("correct");
      } 
      button.disabled=true;
    });
   nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`your ${score} out the ${questions.length}!`; 
    nextButton.innerHTML=" Tryagain";
    nextButton.style.display="block"
    nextButton.style.padding="8px"
}
function handleNextButton(){
    currentquestionindex++;
    if(currentquestionindex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
 nextButton.addEventListener("click",()=>{
if(currentquestionindex<questions.length){
    handleNextButton();
}
else{
    startQuiz();
}
 });
  startQuiz();