var addbtn=document.querySelector(".add-btn");
var ul=document.querySelector(".todos-ul");
var todoinput=document.querySelector(".todo-input");
var delbtn=document.querySelectorAll(".todos-ul i");
var counter=0;

function onclick(e){
    if(todoinput.value!==''){
        counter++;
        var delicon=document.createElement('i');
        delicon.classList.add("fas");
        delicon.classList.add("fa-trash-alt");
        delicon.addEventListener('click',deletefunc);
        var li=document.createElement('li');
        var tncounter=document.createTextNode(`${counter}.  `);
        var tninput=document.createTextNode(`${todoinput.value}`);
        li.appendChild(tncounter);
        li.appendChild(tninput);
        li.appendChild(delicon);
        ul.appendChild(li);
        todoinput.value='';
    }
}
function deletefunc(e){
    this.parentNode.remove();
    counter--;
    var alltodos=document.querySelectorAll(".todos-ul li");
    var x=1;
    alltodos.forEach((item)=>{
        item.removeChild(item.childNodes[0]);
        var newcounter=document.createTextNode(`${x}. `);
        item.prepend(newcounter);
        x++;
        console.log(item.innerText);
        console.log(item.innerHTML);
    })
}

delbtn.forEach((item)=>{
    item.addEventListener('click',deletefunc);
})


addbtn.addEventListener('click',onclick);
window.addEventListener('keydown',(e)=>{
    if(e.key==="Enter"){
        onclick();
    }
})

function voice(){
    var recognition=new webkitSpeechRecognition();
    recognition.lang="en-GB";
    recognition.onresult=function(event){
        console.log(event);
        let str=event.results[0][0].transcript;
        let str2 = str.charAt(0).toUpperCase() + str.slice(1);
        todoinput.value=str2;
    }
    recognition.start();
}