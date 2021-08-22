const body = document.body;

//createElement()
//creates a element
const div = document.createElement("div");
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const h3 = document.createElement("h3");
const h3_2 = document.createElement("h3");

//querySelector()
//we can select the elements that are already on the html page with the help of querySelector. with the reference of the elements id or class
const spanhi = document.querySelector("#hi");
const spanbye = document.querySelector("#bye");
const div_2 = document.querySelector("#div");

//innerText and textContent and innerHTML
//we can add the text to this element
h1.innerText = "adding text using innertext";
h2.textContent = "adding text using textcontent";
//we can't put the another html tag in text when we using innerText or textContent
h3.innerText = "<i><u>king</i></u>";
//for this above problem we can use another method
//this is another method that we can add html tags with the text in element
h3_2.innerHTML = "<i><u>king</u></i>";

//remove()
//we can remove the elements by calling remove () method
spanhi.remove();
//after removing we can add the elements also by appending to another elements
div_2.append(spanhi);
//here we remove the spanbye element
spanbye.remove();
//again we add the spanbye element
div_2.append(spanbye);

//append()
//we can append the element to another element like here we are adding the h1 and h2 and h3 tags in the div tag
div.append(h1, h2, h3, h3_2);
//here we are appending the div tag in to the body tag
body.append(div);

//getAttribute()
//we can get the id of the element
console.log(spanhi.getAttribute("id"));
console.log(spanbye.getAttribute("id"));

//we can get id like this also
console.log(spanhi.id);
console.log(spanhi.className); //we can get the class of the element

//setAttribute()
//we can set the id or class name of an element using setAttribute() method
h1.setAttribute("id", "h1");
console.log(h1.id);
h1.setAttribute("class", "h1class");
console.log(h1.className);

//removeAttribute()
//we can remove the attributes from the element using removeAttribute()
h1.removeAttribute("id");
console.log(h1.id);
h1.removeAttribute("class");
console.log(h1.className);

//classList() and this methods
//we can add the classes to the elements or we can remove or we can display them also
//here we add the 2 classes to the h2 element
h1.classList.add("h1class1");
h1.classList.add("h1class2");
console.log(h1.classList);

//here we can remove the classes from an element
h1.classList.remove("h1class1");
console.log(h1.classList);
h1.classList.remove("h1class2");
console.log(h1.classList);

//this method either add the class to element if it is not present or remove the class from element it it is already there
h2.classList.toggle("h2class");

//style
//you can add the styles to elements
//it just you have to add any style from css in camel case to the style and gives the input as an string
h1.style.backgroundColor = "red";
h2.style.backgroundColor = "cyan";
div.style.color = "yellow";
