//this is how we are going to create this first we need to create the variable that will get a hold to the form
//1.0 get a whole of the form we do it by looking at this line of code <form class="add text-center my-4">
const addform = document.querySelector(".add");

//1.9 we are going to inyect the template we just created to the todolist and the way to do it is like this
//this was the class that was given to the ul here is the code <ul class="list-group todos mx-auto text-light">
const list = document.querySelector(".todos");

//1.15.1 this is where we create the variable to get a hold to the search class of the input field
//this is where we are making a reference to <input class="form-control m-auto" type="text" name="search" placeholder="search todos" />
//very important when we grab the search class we not only want to grab the class more specicfically we need to input field
const search = document.querySelector(".search input");

//1.6 we are going to generate the html template
//now the goal is not to log back to the console the value but to add to the todo list so in order to do it we need to add a
//function that will generate the html string for us , we will create a template
//to build it we use a name and we are going to use a function and inside the function we are going to generate the template
//insidet the function we are going to pass the value we are getting from the input field
const generatetemplate = (todo) => {
	//1.8 we are going to inyect html template by creating a variable that will hold the template , now in order to crate it
	//we are only going to use this code from the ul
	/*<li class="list-group-item d-flex justify-content-between align-items-center">
     <span>make a veggie pie</span> and on this like we are going to change it for the name of the parameter we are goning to use 
                                    in this case is todo
	<i class="far fa-trash-alt delete"></i>
</li>*/

	const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        	<span>${todo}</span>
        	<i class="far fa-trash-alt delete"></i>
        </li>`;

	//1.10 here is where we are inyecting the template but here is where i have to be carefull because if i only use equals
	//i will over write the entire list and replace it this the new todo i submit instead what i need to do is to use the
	//+= this is to append to add to the list already in place the new value we are submiting
	//not this list.innerHTML = html; instead we need to do use this
	list.innerHTML += html;
};

//1.1 now we are going to add an event listener
//the way to create it is by using first the variable we use to grab a whole to the form in this case is addform
//then we add +.addEventListener + (here we are going to listen to the submit event), now we don't have a submit button but
//once we add an event listen to the form we can listen to the submit event either by pressing the submit button or just by
//pressing enter once we have finished submitted the information
addform.addEventListener("submit", (event) => {
	//1.2 the second thing is to avoid the page from reloading or refreshing once we submit the information
	//we do it by taking the event + .preventDefault()
	event.preventDefault();

	//1.3 now we are going to get the value of whatever we want to add in the input field
	//so basically whatever we place here <input class="form-control m-auto" type="text" name="add" />
	//to build this we have to first take the name of the variable that is grabbing the form class
	//then we add the name of the field or id to the input field so basically this part (name="add") and last +.value
	//the value is basicall whatever we type inside the input field
	// const todo = addform.add.value;

	//1.5 to avoid the fact that people can insert empty spaces before the value and after we are going to use a method to
	//get ride of the spaces we are going to use trim() and the way to do it is like chaining or joining
	const todo = addform.add.value.trim();

	//1.4 here we log back to the console the value of whatever we input in the input field
	console.log(todo);

	//1.11 in order to avoid the users to enter empty values to be added to the todo list this is what we do to prevent it
	if (todo.length) {
		generatetemplate(todo);
		//1.12 here we need to add a method to clear the field once we have submitted the information
		//to do this we grab t he form and we add the reset method
		addform.reset();
	}

	//1.7 here we are going to call back the function what we are passing is the value of the input we are submitting

	//generatetemplate(todo); 1.11.1 comment this line so it wouldn't interfiere with the step 1.11
});

//this is how we can use the delete icons from font awesome to delete whatever we wat from the lits

//1.13 first we need to grab a hold to the whole list and add an event listerner to the it but we have that already
//this code was how we grabbed a whole to the whole list
//const list = document.querySelector(".todos");
list.addEventListener("click", (event) => {
	//1.14 we create a condition that if the event target class contains the delete class from the font awesome icon
	//then delete the list element selected this way we avoid any inconvenience with clicking any other class
	//here is the class delete <i class="far fa-trash-alt delete"></i> so we are going to grab this class
	//so once we click on the icon we are going to remove it but we are removing the parent element

	if (event.target.classList.contains("delete")) {
		event.target.parentElement.remove();
	}
});

//1.15
//building the keyup event to filter whatever you are going to search to come up
//we need to get a reference to the input field that hold the search not the form search class but the input field
//the field where we have to input the letters to search
//so basically this code <input class="form-control m-auto" type="text" name="search" placeholder="search todos" />
//the main differece as well is that we are going to add a listen event to the keyup not the submit event

//1.18 we create the function that will filter the values i will input into the search input field
//the reaso why to create it outside the search event listener is for us to have to ability to re use it otherwise inside the
//search event listener it won't be re usable
const filterthetodolist = (term) => {
	//1.20 we log back to the console the resut
	// console.log(term); //1.21.1 comment this line out

	//1.21
	//now i need to get a whole to the whole todolist or in other words i need to get a reference to ever single li tag init
	//so i can then filter it . The problem is that when we get the result back is in an HTML collection but here is how we create it
	//so instead of loggin back to the console the term we are going to log back the list.children

	//1.21.2 log back to the console this
	//console.log(list.children);//1.21.4 comment this out

	//1.21.3 convert the htl collectio we just got before to an array
	//once this has been converted from an html collection to an array we can apply the filter method and map and any other one
	//console.log(Array.from(list.children)); //1.21.5 comment this out

	//1.22 here we are saying that we want to filter out the solutions that matches because we are going to apply a class
	//the onces that don't match keep them on record to apply a class to make them disapear
	Array.from(list.children)

		//1.22.1 here we apply the filter method
		.filter((eachlitag) => !eachlitag.textContent.toLowerCase().includes(term))
		//1.22.2 here we apply the foreach loop
		.forEach((eachlitag) => eachlitag.classList.add("filtered")); //1.22.3 here we are adding the filter class

	Array.from(list.children)
		//1.23 here we apply the filter method
		.filter((eachlitag) => eachlitag.textContent.toLowerCase().includes(term))
		//1.23.1 here we apply the foreach loop
		.forEach((eachlitag) => eachlitag.classList.remove("filtered")); //1.23.2 her we are removing the filtere class
};

//1.16
//here we are adding the event listener to the keyup event
//the way to do it is simple we are using the variable we created before that grabs the search class of the input field
//then we add the event listener then we are going to listen to the keyup event
search.addEventListener("keyup", () => {
	//1.17 here we are getting the value of the input field that has the class of search and we are using the
	//trim method to get ride of any white spaces at the beginnig and end
	const term = search.value.trim().toLowerCase();

	//1.19 here we are calling back the function and were passing it every time the user presses a key
	filterthetodolist(term);
});
