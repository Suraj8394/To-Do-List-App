function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") return;
    
    let li = document.createElement("li");
    li.textContent = taskText;
    
    li.addEventListener("click", function() {
        this.classList.toggle("completed");
    });

    li.addEventListener("dblclick", function() {
        this.remove();
    });

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}
