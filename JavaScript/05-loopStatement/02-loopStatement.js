const color = ["red", "orange", "yellow"];

for (let i in color) {
  console.log(color[i]);
}
for (let i of color) {
  console.log(i);
}
for (let i = 0; i < color.length; i++) {
  console.log(color[i]);
}

// 전부 'red', 'orange', 'yellow'

//--------------------------------

setTimerout(콜백, 시간, 인수);
setIntervarl(콜백, 시간, 인수);
clearTimeout();
clearInterval();

//5초 후에 5초가 지났다고 출력
setTimerout(function () {
  document.write("5초가 지났다.");
}, 5000);

setTimeout(on, 5000);
function on() {
  document.write("5초가 지났다.");
}

let sec = 0;
let timer = setInterval(on, 1000);

function on() {
  document.write(`${sec++}초. + <br/>`);
  if (sec > 10) {
    clearInterval(timer);
  }
}


//------DOM
/*DOM이 들어가면 javascript는 반드시들어간다.
문서를 조작하기위해서는 js가 필요하기 때문이다.
 */

getElementById(단수)
getElementByTagName(복수)[];
getElementClassName(복수)[];
querySelect(단수);
quertSelectAll(복수);

createElement - appendChild
innerText
innerHTML
textContent

//-----event
let n = document.getElementBtId('box')
//고전 방식
n.onclick = function(){}

//이벤트 메서드 방식
//1.
n.addEventListener('click', function(){
    document.write(e.type); //이벤트 타입 출력
})
//2.
n.addEventListener('click', on);
function on (){

}

// form
//document.폼네임.요소네임
let formBox = document.getElementById('form');
formBox.style.border='2px solid red';
n.onclick=function(){}

// ----form 요소



// ----data set