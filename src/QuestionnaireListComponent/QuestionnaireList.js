import React from 'react';

const QuestionnaireList = (props) => {
  return (
    <ul>
    {props.questions.map((question, i) => <li key={i}>{question.name}</li>)}
   </ul>
 )
};

export default QuestionnaireList;
