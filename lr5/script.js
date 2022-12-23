dateSize = 10
fieldSize = 5

incorrectArr = []
insertDataArr = ["_","_","_","_","_"]


validation = [
    /^[а-яА-яіїєІЄЇ]+ [а-яА-яіїєІЄЇ][.][а-яА-яіїєІЄЇ][.]$/,
    /^[а-яА-яіїєІЄЇ]{2}[0-9]{2}$/,
    /^[а-яА-яіїєІЄЇ]+ [№][0-9]{6}$/,
    /^\d{2}[.]\d{2}[.]\d{4}$/,
    /^\S+@\S+\.\S+$/
]

function showData(){
    this.event.preventDefault();
    check();

    if (incorrectArr.length <= 0){
        
        for (i = 0; i < fieldSize; i++){
            elem = document.getElementById("row"+(i+1));
            elem.textContent = insertDataArr[i];
        }
    }
    else {
        for (i = 0; i < incorrectArr.length; i++) {
            incorrectArr[i].classList.add("wrongData")
        };
    }

    incorrectArr = [];
}

function onInput(){
    el = this.event.target
    id = Number.parseInt(el.id.substr(2)) - 1
    value = el.value

    if (id == 3){
         value = rightDate(value)
    }

    if(!validation[id].test(value) && !el.value.length <= 0){
        el.classList.add("wrongData")
    }
    else {
        el.classList.remove("wrongData")
    }
}
 
function check(){
    for (i = 0; i < fieldSize; i++){
        elem = document.getElementById("in"+(i+1))
        value = elem.value
        if ( i == 3){
            value = rightDate(value)
        }
        if(!validation[i].test(value)){
            incorrectArr.push(elem)
        }

        insertDataArr[i] = value
    }
}

function rightDate(str){
    tempDate= new Date(str);

    tempResult="";

    if(tempDate.getDate() < dateSize){
        tempResult += "0"
    }

    tempResult += tempDate.getDate() + "."

    if((tempDate.getMonth() + 1) < dateSize){
        tempResult += "0"
    }
    tempResult += ((tempDate.getMonth() + 1) + "." + tempDate.getFullYear())

    return tempResult;
}
