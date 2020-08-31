const addform = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");
const generatetemplate = (todo) => {
  const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        	<span>${todo}</span>
        	<i class="far fa-trash-alt delete"></i>
        </li>`;
  list.innerHTML += html;
};

addform.addEventListener("submit", (event) => {
  event.preventDefault();
  const todo = addform.add.value.trim();
  console.log(todo);
  if (todo.length) {
    generatetemplate(todo);
    addform.reset();
  }
});

list.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
  }
});

const filterthetodolist = (term) => {
  Array.from(list.children)
    .filter((eachlitag) => !eachlitag.textContent.toLowerCase().includes(term))
    .forEach((eachlitag) => eachlitag.classList.add("filtered"));
  Array.from(list.children)
    .filter((eachlitag) => eachlitag.textContent.toLowerCase().includes(term))
    .forEach((eachlitag) => eachlitag.classList.remove("filtered"));
};

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterthetodolist(term);
});
