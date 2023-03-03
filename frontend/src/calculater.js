import React, { useState } from 'react';
import math from 'mathjs'


function Calculater() {
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');

  const handleCalculation = () => {
    const parsedQuestion = question.match(/(\d+)\s*(plus|minus|times|multiplied by|divided by)\s*(\d+)/i);
    if (!parsedQuestion) {
      setResult("Sorry, I didn't understand the question");
      return;
    }

    const [, firstNum, operator, secondNum] = parsedQuestion;

    let mathOperator;
    switch (operator.toLowerCase()) {
      case 'plus':
        mathOperator = '+';
        break;
      case 'minus':
        mathOperator = '-';
        break;
      case 'times':
      case 'multiplied by':
        mathOperator = '*';
        break;
      case 'divided by':
        mathOperator = '/';
        break;
      default:
        setResult("Sorry, I didn't understand the operator");
        return;
    }

    const mathExpression = firstNum + mathOperator + secondNum;
    const mathResult = math.evaluate(mathExpression);
    setResult(`${firstNum} ${operator} ${secondNum} is ${mathResult}`);
  }

  return (
    <div>
      <input value={question} onChange={(e) => setQuestion(e.target.value)} />
      <button onClick={handleCalculation}>Calculate</button>
      <p>{result}</p>
    </div>
  );
}

export default Calculater  