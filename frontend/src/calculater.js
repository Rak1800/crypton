import React, { useState } from 'react';

function Calculater() {
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleCalculate = () => {
    //let parts = question.split(' ');
  const parsedQuestion = question.match(/(\d+)\s*(plus|minus|multiplied by|divided by)\s*(\d+)/i);

  

    const [, firstNum, operator, secondNum] =parsedQuestion
    console.log(firstNum)

    //let operator = parts[2];
    let num1 = parseInt(firstNum);
    let num2 = parseInt(secondNum);
    let calcResult = '';

    switch (operator) {
      case 'plus':
        calcResult = num1 + num2;
        setResult(`${num1} plus ${num2} is ${calcResult}`);
        break;
      case 'minus':
        calcResult = num1 - num2;
        setResult(`${num1} minus ${num2} is ${calcResult}`);
        break;
      case 'multiplied by':
        calcResult = num1 * num2;
        setResult(`${num1} times ${num2} is ${calcResult}`);
        break;
      case 'divided by':
        calcResult = num1 / num2;
        setResult(`${num1} divided by ${num2} is ${calcResult}`);
        break;
      default:
        setResult('Invalid question');
        break;
    }
  };

  return (
    <div>
      <h1>Calc</h1>
      <input type="text" value={question} onChange={handleQuestionChange} />
      <button onClick={handleCalculate}>Calculate</button>
      <h2>{result?result:<h1>Sorry, I didn't understand the question</h1>}
      </h2>
    </div>
  );
}

export default Calculater;