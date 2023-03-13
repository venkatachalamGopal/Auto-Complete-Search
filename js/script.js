const inputBox=document.querySelector('#textBox');console.log(inputBox);
const suggestBox=document.querySelector('.suggest-box');console.log(suggestBox);

inputBox.addEventListener("keyup",inpBoxfun);

async function inpBoxfun(){
    let value=this.value.trim().toLowerCase();console.log(value);
    const response=await fetch('./data/data.json');
    const data=await response.json()

    let filterData=[];console.log(filterData);
    if(value.length){
         filterData= data.filter((elem)=>{
            return elem.search.toLowerCase().includes(value);
        })
        
    }
    display(filterData);console.log(filterData);
    }

    function display(filterData){
    const listdata=filterData.map((elem)=>{
        return `<li onclick="selectlist(this)">${elem.search}</li>`

    });console.log(listdata);
    suggestBox.innerHTML=`<ul>${listdata.join("")}</ul>`

    }

    function selectlist(list){
        inputBox.value=list.innerHTML;console.log(list.innerHTML);
        suggestBox.innerHTML=" ";
    }

    inputBox.addEventListener("click",()=>{
        inputBox.select();
    })
 


    