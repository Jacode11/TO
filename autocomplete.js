let availableKeywords = [
    '9595',
    '9596',
    '161207',
    '162050',
    '162591',
    '162663',
    '162886',
    
    
    
    
    
    

];

const resultsBox = document.querySelector(".result-box");
const inbutBox = document.getElementById("inbut-box");

inbutBox.onkeyup = function(){
    let result = [];
    let inbut = inbutBox.value;
    if(inbut.length){
        result = availableKeywords.filter((keyword)=>{
          return keyword.toLowerCase().includes(inbut.toLowerCase());
        });
         console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInbut(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInbut(list){
    inbutBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}