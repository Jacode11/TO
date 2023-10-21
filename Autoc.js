/*let availableNumbres = [
    '1',
    '2',
    '3',
    '6',
    '8.1',
    '10',
    '11',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18.1',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',

];

const boxesBox = document.querySelector(".boxes-Box");
const inbBox = document.getElementById("inb-Box");

inbBox.onkeyup = function(){
    let result = [];
    let inbut = inbBox.value;
    if(inbut.length){
        result = availableNumbres.filter((keyword)=>{
          return keyword.toLowerCase().includes(inb.toLowerCase());
        });
         console.log(result);
    }
    display(result);

    if(!result.length){
        boxesBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInb(this)>" + list + "</li>";
    });

    boxesBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInb(list){
    inbBox.value = list.innerHTML;
    boxesBox.innerHTML = '';
}*/
const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    numbersBox = optionMenu.querySelectorAll(".numbers"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click",() => optionMenu.classList.toggle("active"));

numbersBox.forEach(numbers =>{
    numbers.addEventListener("click", ()=>{
        let selectedNumbers = numbers.querySelector(".numbers-text").innerText;
        sBtn_text.innerText = selectedNumbers;
        
        optionMenu.classList.remove("active");
    })
    
    
})

