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
const que = document.querySelector('.list-group-item:nth-child(2)');
que.style.backgroundColor='green'

const third = document.querySelector('.list-group-item:nth-child(3)');
third.style.display = 'none'

//QuerySelectorAll
const lists = document.querySelectorAll('li');
lists[1].style.color='green'
for(var i=0;i<lists.length;i++){
    if(lists[i]%2!=0){
        lists[i].style.backgroundColor='green'
    }
}
