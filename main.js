// Start Variables

let myPush = document.querySelector('#push');
let myInput = document.querySelector('#newtask input');
let myTasks = document.querySelector('#tasks');

// End Variables


// Start Functions
myPush.onclick = function () {
    if ( myInput.value.length == 0) {
        alert("Please Enter a Task!");
    }
    else{
        myTasks.innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${myInput.value}
                </span>
                <button class="delete"> Remove </button>
            </div>
        `;
    }
    
    var current_task = document.querySelectorAll(".delete");
    for (let i = 0; i < current_task.length; i++) {
        current_task[i].onclick = function (){
            this.parentNode.remove();
        }    
    }
    
    var tasks = document.querySelectorAll("#taskname");
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].onclick = function (){
            this.classList.toggle('completed');
        }        
    }

    document.querySelector("#newtask input").value = "";
}
// End Functions