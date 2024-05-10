// This waits for the HTML content of the page to be fully loaded before executing the JavaScript code inside it. It ensures that the JavaScript code doesn't run until the HTML is ready.
document.addEventListener("DOMContentLoaded", function (){
    // This line gets the form element with the ID "todoForm" and stores it in a variable named form
const form = document.getElementById("todoForm")
const taskInput = document.getElementById("taskInput")
const taskList = document.getElementById("taskList")

// This sets up an event listener that listens for the form's submit event. When the form is submitted (i.e., when the user clicks the "Add Task" button or presses Enter), the provided function is called.
form.addEventListener('submit', function(event){
    // This prevents the default behavior of the form submission, which would cause the page to reload.
    event.preventDefault();
    const taskText = taskInput.value.trim()
    if(taskText !== ""){
        addTask(taskText)
        taskInput.value = '';
    }

    
})

function addTask(taskText){

    // const taskItem = document.createElement("li")
    // taskItem.classList.add('list-style')
    // taskItem.textContent = taskText;
    const taskList = document.getElementById('taskList');
    const taskRow = document.createElement('tr')

     // Task column
     const taskCell = document.createElement('td');
     taskCell.textContent = taskText;
     taskRow.appendChild(taskCell);

     const actionCell = document.createElement('td');


     // Add delete button
     const deleteButton = document.createElement('button');
     deleteButton.textContent = '❌';
     deleteButton.classList.add("delete")
    //  taskItem.classList.add("task-item");
     deleteButton.addEventListener('click', function () {
    //  taskItem.remove();
    taskRow.remove()
     });

    //  taskItem.appendChild(deleteButton);
    //  taskList.appendChild(taskItem);
    actionCell.appendChild(deleteButton);
    

    // Append cells to the row
    taskRow.appendChild(actionCell);
    // Append row to the task list
    taskList.appendChild(taskRow);
}

})