document.addEventListener("DOMContentLoaded", () => {
  let listArray = [];

  document.getElementById("create-task-form").addEventListener("submit", function(e) {
    const todoButton = document.querySelector(".submitButton")
    e.preventDefault();
    let x = document.getElementById("new-task-description").innerText;
    console.log(e);

    node = document.createElement("LI")
    let y = document.createTextNode(e.target[0].value);
    node.appendChild(y);
    document.getElementById("tasks").appendChild(node);
  })

  


});
