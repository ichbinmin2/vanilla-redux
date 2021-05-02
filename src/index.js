const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const createTodo = (toDo) => {
  const li = document.createElement("li");
  li.innerText(toDo);
  ul.appendChild(li);
};

const onSubmit = (event) => {
  event.preventDefault();
  const toDo = input.value;
  input.value = "";
  createTodo(toDo);
};

form.addEventListener("click", onSubmit);
