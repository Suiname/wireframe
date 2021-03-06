//test
console.log('component has loaded');
var searchterm; //global variable for search term

window.onload = function() {

function component(type) {

switch (type) {
  case 'search':
//search bar component constructor

//creates domElement set to the first input element
    this.domElement = document.getElementsByTagName('input')[0];

//add a listener event for the search box, sets searchterm to be the value of the search box and then passes that value to the textbox render function
    this.domElement.addEventListener('search', function(event){
        if(event.path[0].value && event.path[0].value != ' '){
          searchterm = (event.path[0].value);
          textbox.render(searchterm);
          }
      });

    this.render = function(query){
      this.domElement.value = query;
    }


    break;
case 'text':
default:
//body text component constructor
//create an array of dom elements, since I have multiple section tags of class content on the page and want to search through them all

  this.domElementArr = [];
  for (var variable = 0; variable < document.getElementsByClassName('bodytext').length; variable++) {
    this.domElementArr[variable] = document.getElementsByClassName('bodytext')[variable];
  }

//body text render function loops through the array of all elements with class name content, it then calls the string replace method
//on the innerHTML of each to replace all <span> and </span> tags with the empty string which removes any highlght tags
//then it calls the string replace method again, this time adding <span> and </span> tags around the matching text passed to the function
//which effectively highlights all instances of text in any content classes

  this.render = function(text){
    var flag = new RegExp(text, 'g');
    console.log(flag);
    for (var variable in this.domElementArr) {
    var remspan = new RegExp('<span class="highlight">', 'g');
    this.domElementArr[variable].innerHTML = textbox.domElementArr[variable].innerHTML.replace(remspan, '');
    var remspan = new RegExp('</span>', 'g');
    this.domElementArr[variable].innerHTML = textbox.domElementArr[variable].innerHTML.replace(remspan, '');
    this.domElementArr[variable].innerHTML = textbox.domElementArr[variable].innerHTML.replace(flag, '<span class="highlight">' + text + '</span>');
    }
  }

  } //end of switch
} //end of component constructor

//instantiate a search box and a textbox
var searchbox = new component('search');
var textbox = new component('text');

} //end window.onload
