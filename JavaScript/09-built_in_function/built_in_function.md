# 내장함수

내장함수는 자스크립트가 함수의 선언을 미리놔 호출만으로 사용할 수 있는 함수를 말한다.
자바스크립트는 다양한 내장 함수를 제공하기때문에 별도의 라이브러리나 모듈을 설치하지 않고 사용할 수 있다.
메세지를 표시하는 내장함수로는 `alert`, `confirm`, `prompt`
시간과 관현된 내장함수는 `setTimeout`, `setInterval`, `clearTimeout`, `clearInterval`
정수 변환으로는`parseInt(string, radix)`, `parseFloat(string)`
그 밨에도 `isNaN`, `isFinite`, `String`, `Number`, `Boolean`, `Array.isArray`, `typeof value`, `Math 객체`가 있다.

많이 쓰이는 함수들은 다음과 같다.

```js
alert("할 말");
```

```js
setTimeout(func, time);
```

`시간지연함수`로 일정한 시간을 기다렸다가 실행한는 함수이다.
내장함수에 함수와 시간을 입력해주면 지정된 시간뒤에 함수가 작동이된다.

```js
setInterval(func, time);
```

`시간반복함수`라고 하며 일정 시간마다 반복해서 실행하는 함수이다.
내장함수에 함수와 시간을 입력해주면 지정된 시간마다 반복해서 함수가 작동한다.

두함수모두 첫번째 `매개변수`로는 `익명함수`를 넣어주고 두번째 매개변수로 `시간`을 넎어준다.
time은 컴퓨터가 처리하는 시간단위는 초가아니라 밀리세컨드 ms를 사용한다.
밀리세컨드는 1000밀리세컨드가 1초이다.

```js
// setTimeout 예
console.log("로딩을 시작합니다.");
setTimeout(function () {
  console.log("펑."); // 로딩 시작.
}, 3000); // 로딩 완료.

// setInterval 예
setInterval(function () {
  const now = new Date();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  console.log(minutes + "분" + seconds + "초"); // 16분 11초
  // 16분 12초
}, 1000); // 16분 13초
// 16분 14초
//	  ...

// setInterval 예 #2
let time = 10;
setInterval(function () {
  if (time >= 0) {
    console.log(time);
    time = time - 1;
  }
}, 1000);
// 10 9 8 7 6 5 4 3 2 1 0
```

---
