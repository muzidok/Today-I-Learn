# DOM

공부를 시작했을때 가장 익숙하지 않았던 단어라고하면 `DOM`이 제일먼저 떠오른다.
`DOM`은 **Document Object Model** 의 줄임말로,
웹브라우저가 정적인 웹페이지를 변경하거나 조작하기 위해 `HTML 파일을 자바스크립트 객체로 만들어주는 것`을 말한다.

HTML은 tag를 사용하여 구조를 구성하는 역할을하기떄문에 기능이 제한적이고 정적인 페이지만을 만들수 있다.
그래서 자바스크립트로 다양한 기능을 만들어서 웹페이지에 적용하기 위해 사용하는것이 바로 DOM이다.

즉, DOM을 통해서 HTML에 있는 값을 자바스크립트로 읽어 올 수 있고 , 읽어온 값을 우리가 javascript 함수로 구현한 기능을 통해서 처리하여 DOM을 통해 HTML을 조작할 수 있다.

이렇게 DOM을 사용하면 HTML과 Javascript가 서로 상호작용을하면서 동적인 페이지를 만들 수 있다.

DOM을 쓸때 가장 많이 사용하는 코드는 `document.getElementById`이다.

```js
document.getElementById("태그의 id").innerText;
// HTML 파일로 가서 태그id라는 id를 가진 태그를 선택해서 제어한다.
```
