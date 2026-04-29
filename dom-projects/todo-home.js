const todoForm = document.getElementById("todo-form");
const userName = document.getElementById("username");
const logoutBtn = document.getElementById("logout-Btn");

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (!currentUser) {
    window.location.href = "./login-page.html";
} else {
    userName.innerText = currentUser.fullName;
}

logoutBtn.addEventListener("click" , function(){
   localStorage.removeItem("currentUser");
   window.location.href = "./login-page.html";
});

todoForm.addEventListener("submit" , function(event){
    event.preventDefault();

    const task = event.target.task.value;

    const todo = {
        task: task,
        createdBy:{
        ...currentUser,
        },
        isTaskCompleted: false,
    }
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todo);
    localStorage.setItem("todos" , JSON.stringify(todos));
    alert("Task successfully completed");
    event.target.reset();

});
