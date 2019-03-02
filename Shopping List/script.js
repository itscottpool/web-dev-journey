/**************************************
*            Variables                *
**************************************/

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var deleteli = document.getElementsByClassName("deleteItem");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var listLength = li.length;

/**************************************
*            Functions                *
**************************************/

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var button = document.createElement("button");
  li.appendChild(document.createTextNode(input.value + " "));
  button.appendChild(document.createTextNode("Remove"));
  li.appendChild(button);
  ul.appendChild(li);
  input.value = "";
  li.addEventListener("click", crossOut);
  button.addEventListener("click", deleteListItem);
}

function addListAfterClick() {
  if(inputLength() > 0){
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if(inputLength() > 0 && event.keyCode === 13){
    createListElement();
  }
}

function crossOut(){
  console.log(event.currentTarget);
  event.currentTarget.classList.toggle("done");
}

function deleteListItem() {
  var li = event.currentTarget.parentElement;
  li.parentElement.removeChild(li);
}

/***************************************
*               Main                   *
***************************************/

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for(i=0; i < listLength; i++)
{
  li[i].addEventListener("click", crossOut);
  deleteli[i].addEventListener("click", deleteListItem);
}