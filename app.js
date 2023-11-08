// const background = document.getElementsByClassName("list-group-item");
// background[2].style.backgroundColor = "green";
// for(var i =0;i<background.length;i++){
//     background[i].style.fontWeight = 'bold';
// }
// const item = document.getElementsByTagName('li');
// for(var i =0;i<item.length;i++){
//       item[i].style.backgroundColor = '#f4f4f4'
//     }

//QuerySelector
// const que = document.querySelector('.list-group-item:nth-child(2)');
// que.style.backgroundColor='green'

// const third = document.querySelector('.list-group-item:nth-child(3)');
// third.style.display = 'none'

// //QuerySelectorAll
// const lists = document.querySelectorAll('li');
// lists[1].style.color='green'
// for(var i=0;i<lists.length;i++){
//     if(lists[i]%2!=0){
//         lists[i].style.backgroundColor='green'
//     }
// }

//Traversing the DOM
var itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';

// console.log(itemList.parentNode.parentNode);//container
// console.log(itemList.parentNode.parentNode.parentNode);//main

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';

// console.log(itemList.parentElement.parentElement);//container
// console.log(itemList.parentElement.parentElement.parentElement);//main


//ChildNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.color = 'red'

// //firstChild
// console.log(itemList.firstChild);
// //firstElementChild
// console.log(itemList.firstElementChild);

//LastChild
// console.log(itemList.lastChild);
// //LAstElementChild
// console.log(itemList.lastElementChild);

//nextSiblings
// console.log(itemList.nextElementSibling);
// console.log(itemList.nextSibling);

//previousSiblings
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color ='green'

//createElement

var newDiv = document.createElement('div');

//Add Class
newDiv.className='hello'
//Add ID
newDiv.id='hello1'
//add attribute
newDiv.setAttribute('title','Hello Div')
//create TextNode
var newDivText = document.createTextNode('Hello World');
//Add text to div
newDiv.appendChild(newDivText)
console.log(newDiv);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1);

var items = document.querySelector('#items');
var item1 = document.querySelector(' li');

items.insertBefore(newDiv,item1)