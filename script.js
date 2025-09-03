const buttons = document.querySelectorAll('.button');
const display = document.querySelector("#display")

let currentExpression = '0'; // Текущее выражение
// button в данном случае будет передаваться СОБЫТИЕ НАЖАТИЕ, где можно будет узнать кнопку
//  по которой нажали через target и из которой можно будет доставать её значение



function handleButton(button) {
    const value = button.target.textContent; // Получаем текст кнопки (например, "5", "+")
    
    if (value === '=') {
      // Вызов функции вычислени
      
          currentExpression = eval(currentExpression.replaceAll("×", "*")
          .replaceAll("÷", "/")
          .replaceAll("−", "-")) // строка превращается в JS код и получаем результат 3
              eval(currentExpression); currentExpression / 100

          // const numbers = input.textContent.split("%");
          // const res = (numbers[0] / 100) * numbers[1]

    } else if (value === 'AC') {
      currentExpression = currentExpression.slice(0, -1);
      
      if(currentExpression === ""){
        currentExpression = "0"
        display.textContent = currentExpression;
      }
      else {
          display.textContent = currentExpression;
      }
        

    } else if (value ==='%') {
      if (!currentExpression.includes("%")) {
        currentExpression = result + "%";
      }
      
    }
    
      
    else {
        if (currentExpression[0] === "0"){
          
          currentExpression = currentExpression.slice(1);
          currentExpression += value
        }
        else{
            currentExpression += value

        }
    }
    display.textContent = currentExpression
    console.log(currentExpression)
}




// Для каждой кнопки добавляем обработчик клика
buttons.forEach(button => {
  button.addEventListener('click', handleButton);
})