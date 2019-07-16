document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("create-task-form").addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(e);

    node = document.createElement("LI")
    buttonnode = document.createElement("Button")
    let y = document.createTextNode(e.target[0].value);

    node.appendChild(y);
    node.appendChild(buttonnode);
    document.getElementById("tasks").appendChild(node);
    const li = document.querySelectorAll("li")
    li.forEach (list => {
      list.style.color = "blue";
      list.addEventListener("click", function(e){
        list.remove();
      })
    })

  })


});
