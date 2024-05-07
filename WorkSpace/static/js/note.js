// save | allnotes
let inputTitle = document.getElementById("note-title");
let saveBtn = document.getElementById("saveBtn");
let inputText = document.getElementById("textarea");
let output = document.getElementById("output");
let AllNotes = document.getElementById("All_Notes");
let ANBody = document.getElementsByClassName("AllNotesBody")[0];
// let closeBtn = document.getElementsByClassName("CloseBtn")[0];


let child, favBtn, delBtn, h2, p ;

saveBtn.addEventListener('click', (e) => { 
    e.preventDefault();
    if (inputTitle.value == "" || inputText.value == "") {
        alert("Please enter some Title and Text");
    } else {
        child = document.createElement("div");
        favBtn = document.createElement("button");
        delBtn = document.createElement("button");
        h2 = document.createElement("h2");
        p = document.createElement("p");

        h2.innerHTML = inputTitle.value;
        p.innerHTML = inputText.value;
        delBtn.innerHTML = "Delete";
        favBtn.innerHTML = "☆";

        child.classList.add("list");
        favBtn.classList.add("fav");
        delBtn.classList.add("delete");
        h2.classList.add("output-title");
        p.classList.add("text");
        
        
        child.appendChild(delBtn); // This ensures the delete button is added after the fav button
        child.appendChild(favBtn);
        child.appendChild(h2);
        child.appendChild(p);
        output.appendChild(child);
     
        // clear input fields
        inputTitle.value = "";
        inputText.value = "";
    }
    favBtn.addEventListener("click", () => {
        favBtn.classList.toggle("color");
    })
    delBtn.addEventListener('click', function() {
        output.removeChild(this.parentElement);
    });
});
AllNotes.addEventListener('click', () => {

    ANBody.appendChild(output);
    favBtn.addEventListener("click", () => {
        favBtn.classList.toggle("color");
    })
    delBtn.addEventListener('click', function() {
        output.removeChild(this.parentElement);

    });
});  
// closeBtn.addEventListener('click', () => {          
//     output.appendChild(ANBody);   

//     favBtn.addEventListener("click", () => {
//         favBtn.classList.toggle("color");
//     })
//     delBtn.addEventListener('click', function() {
//         output.removeChild(this.parentElement);
//     });
  
// })
