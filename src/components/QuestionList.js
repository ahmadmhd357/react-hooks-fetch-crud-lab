import React, { useEffect } from "react";
import QuestionItem from './QuestionItem'
function QuestionList({setQuestions, questions}) {
  
  useEffect(()=>{
     fetch('http://localhost:4000/questions')
     .then(res=>res.json())
     .then(data=>setQuestions(data))
     
  },[setQuestions]
  )
  
  const questionsToDisplay = questions?questions.map(qu=><QuestionItem setQuestions={setQuestions} question={qu} key={qu.id} />):'Loading...';
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsToDisplay}</ul>
    </section>
  );
}

export default QuestionList;
