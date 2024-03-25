// save | allnotes
let inputTitle= document.getElementById("note-title");
let saveBtn= document.getElementById("saveBtn");
let inputText= document.getElementById("textarea");
let output= document.getElementById("output");

let child, delBtn, h2, p;

saveBtn.addEventListner('click', function(e){
    e.preventDefault();
    if ((inputTitle.value == "") || (inputText.value == ""))
    {
        alert("Please enter some Title and Text");}
    else{
      child =document.createElement("div");
      delBtn =document.createElement("button");
      h2 =document.createElement("h2");  
      p =document.createElement("p"); 

      h2.innerHTML = inputTitle.value;
      p.innerHTML = inputText.value;
      delBtn.innerHTML = "Delete";

      child.classList.add("list");
      delBtn.classList.add("delete");
      h2.classList.add("output-title");
      p.classList.add("text");

      child.appendChild(delBtn);
      child.appendChild(h2);
      child.appendChild(p);
      output.appendChild(child);

      inputTitle.innerHTML= "";
      inputText.innerHTML= "";
    }    
     delBtn.addEventListner('click', function(){
         output.removeChild(this.parentElement);
     })
    })
