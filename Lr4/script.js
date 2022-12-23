var number = 0
var resize = 1.2
var imgCnt = 8

window.onclick = function (event){
    if (event.target.id =='addBtn'){
        if (number == imgCnt) {
            alert("Oversize "+imgCnt)
        }
        tempHolder = document.getElementById("img_holder")
        let temp = document.createElement('img')
        temp.src="https://picsum.photos/500/200?random="+(Math.floor(Math.random() * 666666))
        temp.className="new_img"
        temp.id = "img"+number
        number++;
        tempHolder.append(temp)
    }
    else if (event.target.id=='increaseBtn'){

        tempHolder = document.getElementById("img_holder")
        temp = document.querySelector("img.new_img#img"+(number-1))
        size = parseInt(window.getComputedStyle(temp).width)
        temp.style.width=(size*resize)+"px"
    }
    else if (event.target.id =='decreaseBtn'){

        tempHolder = document.getElementById("img_holder")
        temp = document.querySelector("img.new_img#img"+(number-1))
        size = parseInt(window.getComputedStyle(temp).width)
        temp.style.width = (size/resize)+"px"
    }
    else if (event.target.id =='deleteBtn'){
        if(number <= 0) {
            alert("No images left")
        }
        else if (number > 0){
            tempHolder = document.getElementById("img_holder")
            number--
            temp = document.querySelector("img.new_img#img"+number)
            temp.remove()
        } 
    }

    if (event.target.id =='id8'){
        temp2 = document.getElementById("id9")
        temp1 = event.target
        const arr_elems = [temp1, temp2]
        arr_elems.forEach(el => {
            if (el.classList.contains("second")){
                el.classList.remove("second")
                el.classList.add("first")
            }
            else {
                el.classList.add("second")
                el.classList.remove("first")
            }
        })
    }
    else if (event.target.id =='id9'){
        temp1 = document.querySelector("#id8");
        temp2 = event.target;
        const arr_elems = [temp1, temp2];
        arr_elems.forEach(el => {
            if (el.classList.contains("second")){
                el.classList.remove("second");
                el.classList.add("first");
            }
            else {
                el.classList.add("second");
                el.classList.remove("first");
            }
        })
    }
}