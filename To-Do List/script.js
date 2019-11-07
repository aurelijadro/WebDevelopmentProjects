const form = document.getElementById("form");
const list = document.querySelector("ul");
const listItems = document.querySelectorAll("li");
const myToDo = [];
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (form["todo"].value !== "") {
        myToDo.push(form["todo"].value);
        form.reset();
        updateToDo();
    }
});

function updateToDo() {
    list.innerHTML = "";

    myToDo.forEach(function (item) {

        let li = document.createElement("li");
        li.appendChild(document.createTextNode(item));
        li.setAttribute("class", "list-group-item");
        list.appendChild(li);
    })
}

list.addEventListener("click", function (e) {
    let done = e.target.textContent;
    myToDo.forEach(checkItem);

    function checkItem(item, index) {
        if (done == item) {
            myToDo.splice(index, 1)
            updateToDo();
        }
    }



})
