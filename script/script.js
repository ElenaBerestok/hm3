// ДЗ пункт 1

const userAnswer = Number(prompt ('Выберите число'));
console.log(userAnswer);


const userAnswerTwo = Number(prompt ('Выберите ещё одно число'));
console.log(userAnswerTwo);

if (userAnswer > userAnswerTwo){
    alert ('Число '+ userAnswer + ' больше, чем число '+ userAnswerTwo);
} 
else if (userAnswer < userAnswerTwo){
    alert ('Число '+ userAnswer +  ' меньше, чем число '+ userAnswerTwo);
}
else if (userAnswer = userAnswerTwo){
    alert ('Числа равны');
}
else {
    alert ('Укажите число')
}


// ДЗ пункт 2

const question = Number(prompt ('Выберите число'));
console.log(question);

const questionTwo = Number(prompt ('Выберите ещё одно число'));
console.log(questionTwo);

const questionThree = prompt ('Выберите математическое действие');
console.log(questionTwo);

switch (questionThree){
    case '+':
        alert ( question + questionTwo);
        break;
    case '-':
        alert ( question - questionTwo);
        break;
    case '*':
        alert ( question * questionTwo);
        break;
    case '/':
        alert ( question / questionTwo);
        break;
    default:
        alert ( 'Не знаю такого действия');
}

// ДЗ пункт 3

const userAge = Number(prompt ('Укажите свой возраст'));
console.log(userAge);

const withParents = prompt ( 'Вы с родителями?')

if (userAge = 18-60){
    alert ('Доступ разрешен');
} else if (userAge = 12-17){
    withParents = true;
    alert ('Доступ разрешен');
} else if (userAge = 12-17){
    withParents = false;
    alert ('Доступ запрещен');
} else {
    alert ('Доступ запрещён')
}
