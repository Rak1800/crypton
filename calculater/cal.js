const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your question? ', (question) => {
  const parsedQuestion = question.match(/(\d+)\s*(plus|minus|multiplied by|divided by)\s*(\d+)/i);
  if (!parsedQuestion) {
    console.log("Sorry, I didn't understand the question");
    rl.close();
    return;
  }

  const [, firstNum, operator, secondNum] = parsedQuestion;
  let result;

  switch (operator.toLowerCase()) {
    case 'plus':
      result = parseInt(firstNum) + parseInt(secondNum);
      break;
    case 'minus':
      result = parseInt(firstNum) - parseInt(secondNum);
      break;
    case 'multiplied by':
      result = parseInt(firstNum) * parseInt(secondNum);
      break;
    case 'divided by':
      result = parseInt(firstNum) / parseInt(secondNum);
      break;
    default:
      console.log("Sorry, I didn't understand the operator");
      rl.close();
      return;
  }

  console.log(`${firstNum} ${operator} ${secondNum} is ${result}`);
  rl.close();
});