const localStorageKey = 'to-do-list-ep';

function validateIfExistsNewTask(){

    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let inputValue = document.getElementById('input-new-task').value;
    let exists = values.find(x => x.name == inputValue);
    return !exists ? false : true

}

function newTask(){

    let input = document.getElementById('input-new-task');
    input.style.border = '1px solid black'

    if(!input.value){
        input.style.border = '2px solid red'
        alert('Digite algo para inserir na sua lista!');

    } else if(validateIfExistsNewTask()){
        alert('Já existe uma tarefa com está descrição!')
    } else{

        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey,JSON.stringify(values))
        showValues();
    }
    input.value = '';

}

function showValues(){

    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let list = document.getElementById("to-do-list");
    list.innerHTML = '';

    for (let i=0; i < values.length; i++){

        list.innerHTML += `<li>${values[i]['name']}<button id='btn-ok' onclick='removeItem("${values[i]['name']}")'><i class="bi bi-check-lg"></i></button></li>`

    }

}

function removeItem(data){

    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let index = values.findIndex(x => x.name == data);
    values.splice(index,1);
    localStorage.setItem(localStorageKey,JSON.stringify(values));
    showValues();

}

showValues();