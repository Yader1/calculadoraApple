var operation = null;
var inputValueMemo = null;

//Funcion que recoje los datos del button
function getContentClick(event){
    const value = event.target.innerHTML;
    filterAction(value);
}

//Funcion que filtra los metodos
const filterAction = value =>{
    value === "0" ? addNumberInput(0) : null;
    value === "1" ? addNumberInput(1) : null;
    value === "2" ? addNumberInput(2) : null;
    value === "3" ? addNumberInput(3) : null;
    value === "4" ? addNumberInput(4) : null;
    value === "5" ? addNumberInput(5) : null;
    value === "6" ? addNumberInput(6) : null;
    value === "7" ? addNumberInput(7) : null;
    value === "8" ? addNumberInput(8) : null;
    value === "9" ? addNumberInput(9) : null;
    value === "," ? addNumberInput(',') : null;

    value === "+" ? setOperation('+') : null;
    value === "-" ? setOperation('-') : null;
    value === "X" ? setOperation('*') : null;
    value === "/" ? setOperation('/') : null;
    value === "%" ? setOperation('%') : null;
    value === "+/-" ? setOperation('') : null;
}

//Funcion que añadea los valores al input o pantalla de la calculadora
function addNumberInput(value){
    const inputScreen = document.getElementsByClassName('calculator__screen')[0];
    const inputValue = inputScreen.value;

    //este if lo que hace es validar que si ingresamos un numero borre el cero que esta.
    if(inputValue === "0" && inputValue.length === 1 && value != ","){
        inputScreen.value = value;
        return;
    }

    //Concatenamos los valores que vamor ingresando
    inputScreen.value = inputValue + value;
}

//Funcion que recibe el operador y la guarda
function setOperation(operation){
    const inputScreen = document.getElementsByClassName("calculator__screen")[0].value;
    this.operation = operation;

    if(inputScreen != 0){
        calculation();
    }
}

//Funcion que guarda los calculas ya registrado
function calculation(){
    const inputScreen = document.getElementsByClassName("calculator__screen")[0];
    let valueOne = this.inputValueMemo;
    let valueTwo = inputScreen.value;
    let total = 0;

    if(this.operation === "+" && inputScreen.value != ""){
        total = valueOne + valueTwo;
    }

    this.inputValueMemo = total;
    this.inputScreen.value = "";
    inputScreen.placeholder = total;
}