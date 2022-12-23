document.addEventListener("DOMContentLoaded", tableCreate);

temp_flag = false

columsCnt = 6
variant = 8
tempSize = 7

function tableCreate(){

    for (i = 0; i < columsCnt; i++){

        tempRow =  document.createElement('tr')
        tempRow.id = "tr" + i
        tempRow.classList.add("row")

        for (j = 0; j < columsCnt; j++){

            tempCell = document.createElement('th')
            id = (i * columsCnt + j + 1)
            tempCell.id = "th" + id
            tempCell.textContent = id
            tempCell.classList.add("cell")
            tempCell.classList.add("cellNotEven")
            tempRow.append(tempCell)
        }

        alltbl = document.getElementById("tempTable")
        alltbl.append(tempRow)
    }

    cell = document.getElementById("th" + variant)

    cell.addEventListener("mouseenter", randomChange)
    cell.style.position="relative"

    tempColor = document.createElement('input')
    tempColor.type="color"
    tempColor.id="colorPick"

    tempColor.addEventListener("change", returnColor)
    document.getElementById("tempTable").append(tempColor)

    cell.addEventListener("click", OneClick)
    cell.addEventListener("dblclick", doubleClick)

}

function randomChange() {
    this.style.backgroundColor = "rgb("+ Math.floor(Math.random() * 256) +","+ Math.floor(Math.random() * 256) +","
    + Math.floor(Math.random() * 256) +")"
}

function returnColor(){
    if (!temp_flag){
        document.getElementById("th" + variant).style.backgroundColor = this.value
    }
    else{

        for (i = Math.floor(variant / columsCnt) * columsCnt + 1; 

                i < (Math.floor(variant / columsCnt) * columsCnt + columsCnt + 1); i++){

            if (i >= variant && (variant % 2) == (i % 2)){
    
                document.getElementById("th" + i).style.backgroundColor = this.value
            }
        }

    }

    this.style.display = "none"
}

function OneClick(){

    temp_flag = false
    tmp = document.getElementById("colorPick")
    tmp.style.display="block"
    tmp.style.top = "0"
    ind = variant - Math.floor(variant / columsCnt) * columsCnt
    tmp.style.left = (tempSize *  ind) + "vmin"
}

function doubleClick(){
    temp_flag = true;
    tmp = document.getElementById("colorPick")
    tmp.style.display="block"
    tmp.style.top = "0"
    tmp.style.left = (tempSize * columsCnt) + "vmin"

    for (i = Math.floor(variant / columsCnt) * columsCnt + 1; i < (Math.floor(variant / columsCnt) * columsCnt + columsCnt + 1); i++){
        if (i >= variant && (variant % 2) == (i % 2)){

            for (j = 0; j < columsCnt-1; j++ ){
                document.getElementById("th" + (i + 6 * j)).style.backgroundColor = "rgba(233, 221, 52, 0.795)"
            }
            document.getElementById("th" + (i - 6)).style.backgroundColor = "rgba(233, 221, 52, 0.795)"
        }
    }
}