// ----Getting required elements ----//
const form = document.getElementById("input-form");
const to_do_text = document.getElementById("input-text");

// Adding event listener to the add button //

const add= document.getElementById("add-task");
add.addEventListener('click',(e)=>{
    e.preventDefault();
    const to_do_text=document.getElementById("input-text").value;
// Checking if form is empty, if it is then alerting user //
    if(! to_do_text){
        alert('Please fill your TO-DO ');
        return;
    }    
// *****  If form is not empty ***** //

    const conatainer = document.querySelector(".container ul");
    const li = document.createElement('li');
    conatainer.appendChild(li);

// ******  Creating input element (Checkbox) ********  // 

    const checkBox = document.createElement("input");
    checkBox.type="checkbox";
    li.appendChild(checkBox);
    checkBox.name='checkbox1';

//  *****     Adding eventListener to checkbox  **********  //

    checkBox.addEventListener('click',()=>{
        checkBox.classList.add('.li-checked');
    })

// *****   Creating list Items and adding classes Dyanamically  ****   //

    const label = document.createElement('label');
    const listText = document.createElement('input');
    listText.type = 'text';
    listText.classList.add('listText');
    label.appendChild(listText)
    listText.setAttribute('readonly', 'readonly');
    li.appendChild(label);
    listText.value = to_do_text;

//   ***  Creating Edit and delete buttons and appending them  ***  //

    const a1 = document.createElement('button');   
    const a2 = document.createElement('a');

    a1.innerHTML = 'EDIT';
    a1.classList.add('edit');
    a2.innerHTML = '<i class=" fa fa-regular fa-trash"></i>';
    li.appendChild(a1);
    li.appendChild(a2);

//  ****    Adding click events to edit and delete buttons  ****     //

    a1.addEventListener('click',()=>{
        if(a1.innerHTML == 'EDIT'){
            listText.removeAttribute("readonly");
            listText.focus();
            a1.innerText = 'Save';
        }
        else{
            listText.setAttribute("readonly", "readonly");
            a1.innerHTML = 'EDIT';
        }
    })

//  ****  Changing footer text (number of items in list )  **** //
    const footText = document.getElementById('foot-text');

    a2.addEventListener('click', ()=>{
        
        conatainer.removeChild(li);
        if(conatainer.childElementCount == 0){
            footText.innerHTML = "No tasks left";
        }
        else{
        footText.innerHTML = conatainer.childElementCount  + " " + "tasks left";
        }
    })

    if(conatainer.childElementCount == 0){
        footText.innerHTML = "No tasks left";
    }
    else{
        footText.innerHTML = conatainer.childElementCount  +" " + "tasks left";
    }

});

