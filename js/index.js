let todos = []; // en tom array
console.log(document);
const buttonElem = document.querySelector("#add-todo-button");
console.log(buttonElem);

buttonElem.addEventListener("click", () => {

  const todo = prompt("Vad vill du göra?");

todos.push(todo);

console.log(todos);
});

