import React from "react";

function QuestionItem({ question, setQuestions }) {
  
  const { id, prompt, answers, correctIndex } = question;

  const options =answers? answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  )):null;

  function handlDelete (){
    fetch(`http://localhost:4000/questions/${id}`,{method: 'DELETE'})
    .then(res=>res.json())
    .then(fetch(`http://localhost:4000/questions`).then(res=>res.json()).then(data=>setQuestions(data)))
    
  }

  function hanldPatch (e){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        correctIndex: e.target.value
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={hanldPatch}>{options}</select>
      </label>
      <button onClick={handlDelete} >Delete Question</button>
    </li>
  );
}

export default QuestionItem;
