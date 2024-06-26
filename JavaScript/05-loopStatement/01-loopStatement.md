# 반복문

반복문은 같은 행위를 몇 번 반복할지 반복적인 작업을 해야할 때 사용하는 문법이다.
반복문에서 핵심은 반복횟수이다.
프론트엔드의 경우 브라우저에서 crash로 끝나겠지만 백엔드의 경우 서버 컴퓨터에 커널 패닉이일어나서 서버가 다운될 수 있다.
가장 기본적인 반복문으로는 for 문이있다.

```js
for (초기식; 조건식; 증감문;) {
  // 반복해서 실행할 코드
}
```

for문에는 초기식, 조건식, 증감식이 들어가며 **순서가 바뀌면 안된다.**

- **초기식** : 반복문의 시작점을 만들어준다. 초기식에는 const를 사용하면 안된느데 이유는 재할당이 되지 않아서이다.
- **조건식** : \*\*\*\*반복 할 조건
- **증감문** : 변수의 증가 또는 감소 식 `i++` / `i--`

반복문에는 특정 조건 만족시, 조건식을 통한 종료이전에 `break`를 사용해서 종료할 수 도 있다.
또 명령문을 실행하지 않고 다음 반복으로 `continue`를 사용해서 건너뛰기 할 수 도 있다.

```js
const fruits = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];

for (let i = 0; i <= 10; i++) {
  console.log(fruits[i].number + " " + fruits[i].title);
}

// '1 레드향'
// '2 샤인머스켓'
// '3 산청딸기'
// '4 한라봉'
// '5 사과'
// '6 애플망고'
// '7 딸기'
// '8 천혜향'
// '9 과일선물세트'
// '10 귤'
// undefined
```
