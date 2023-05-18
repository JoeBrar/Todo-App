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
function decrementCounter(){
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
function deletefunc(e){
    this.parentNode.remove();
    decrementCounter();
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
        let words=str.split(" ");
        console.log(words);
        if(words[0].toLowerCase()=="delete"||words[0].toLowerCase()=="remove"){
            words.forEach((word)=>{
                word=word.toLowerCase();
                switch(word){
                    case "first": case "one": case "1":
                        ul.removeChild(ul.children[0]);
                        decrementCounter();
                        break;
                    case "second": case "two": case "2":
                        ul.removeChild(ul.children[1]);
                        decrementCounter();
                        break;
                    case "third": case "three": case "3":
                        ul.removeChild(ul.children[2]);
                        decrementCounter();
                        break;
                    case "fourth": case "forth": case "four": case "4":
                        ul.removeChild(ul.children[3]);
                        decrementCounter();
                        break;
                    case "fifth": case "five": case "5":
                        ul.removeChild(ul.children[4]);
                        decrementCounter();
                        break;
                    case "sixth": case "six": case "6":
                        ul.removeChild(ul.children[5]);
                        decrementCounter();
                        break;
                    case "seventh": case "seven": case "7":
                        ul.removeChild(ul.children[6]);
                        decrementCounter();
                        break;
                    case "eighth": case "eight": case "8":
                        ul.removeChild(ul.children[7]);
                        decrementCounter();
                        break;
                    case "ninth": case "nine": case "9":
                        ul.removeChild(ul.children[8]);
                        decrementCounter();
                        break;
                    case "tenth": case "ten": case "10":
                        ul.removeChild(ul.children[9]);
                        decrementCounter();
                        break;
                    case "eleventh": case "eleven": case "11":
                        ul.removeChild(ul.children[10]);
                        decrementCounter();
                        break;
                }
            })
        }
        else{
            let str2 = str.charAt(0).toUpperCase() + str.slice(1);
            todoinput.value=str2;
        }
    }
    recognition.start();
}