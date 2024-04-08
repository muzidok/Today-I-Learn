# JQuery

## 배우는 이유

## 메소드

### 1. css() : 스타일 변경 메서드

```js
$("선택자").css("속성", "값");

$("선택자").css({ 속성: "값", 속성: "값" });
```

### 1. children(): 선택자를 기준으로

자식요소 선택하는 메서드

- find(): 선택자를 기준으로 자손요소 선택하는 메서드

```js
$("선택자").children("선택자");

$("선택자").find("선택자");
```

### 1. siblings() :

선택자를 기준으로 형제요소 선택하는 메서드

```js
$("선택자").siblings("선택자");
```

parent() : 선택자를 기준으로 부모요소 선택하는 메서드

```js
$("선택자").parent("선택자");
```

### 1. next(), prev(), nextAll(), prevAll(),

- 요소 탐색 선택자 : nextUntil(), prevUntil()

1. eq(index) ,요소:first-child, 요소:last-child, 요소:nth-child 1. 요소:gt(index) , 요소:lt(index),
   문서객체.not('선택자'), 문서객체.has('선택자') gt(>) : 선택된 인덱스부터 다음의
   모든 요소 선택 lt(<) : 선택된 인덱스부터 이전의 모든 요소 선택 not : 선택자 제외
   has : 선택요소를 포함(has)한 요소

### 7. show(), hide(), toggle().. fadeOut(),

fadeIn(), fadeToggle(), slideDown(), slidUp(), slideToggle()

### 8. text(), html(), val()

text() 는 innerText와 같다. 선택자 하위에이쓴 자식태그들의 문자열만 출력한다.
html()은 선택자 하위에이쓴 자식태그들의 문자열과 태그들을 모두 출력한다.
val()은 input타입에서 .value로 값을가져오는것과 같다. form의 값을 가져오거나 설정한다

### 9. attr(), prop()

- attr(속성명) : getter
- attr(속성명, 속성값) : setter

```html
<body>
  <a class="text" href="http://www.naver.com">네이버</a>
  <div class="di"></div>
  <a class="test2">구글</a>
  <a class="test3">다음</a>
</body>
<script>
  let n = $(".test").attr("href"); //네이버 주소
  $(".test2").attr("href", "http://www.google.com");
  $(".test3").attr({ href: "http:///www.daum.net", title: "다음 바로가기" });
</script>
```

- removeAttr(속성명) : 속성값 제거

- prop(속성명) : getter

```html
<body>
  <form class="f">
    <input type="checkbox" name="ch1" class="ch1" /> 전체동의 <br />
    <input type="checkbox" name="ch2" class="ch2" /> [필수]동의 <br />
    <input type="checkbox" name="ch3" class="ch2" /> [선택]동의 <br />
    <input type="checkbox" name="ch4" class="ch2" /> [선택]동의 <br />
  </form>
</body>
<script>
  $(".ch1").click(function () {
    $(".ch2").prop("checked", this.checked);
  });
</script>
```

### 10. append(), prepend(), after(), before()

### 11. remove(), empty()

- remove() : 선택한 것만(태그자체가) 삭제
- empty() : 선택한 것의 자식들을 모두 삭제

```html
  <div class="di">
      <h1>Nestjs introduce</h1>
      <p>
        We're in love with TypeScript, but above all - we love Node.js. That's
        why Nest is compatible with both TypeScript and pure JavaScript. Nest
        takes advantage of the latest language features, so to use it with
        vanilla JavaScript we need a Babel compiler. We'll mostly use TypeScript
        in the examples we provide, but you can always switch the code snippets
        to vanilla JavaScript syntax (simply click to toggle the language button
        in the upper right hand corner of each snippet).
      </p>
    </div>
  </body>
  <script>
    $(".di").remove();
    // 브라우저에 아무것도 뜨지않는다. => 개발자도구를 보면  div가 아예 존재하지 않는다.
    $(".di").empty();
    // 위와 같다. => 개발자도구를 보면 div 클래는 존재한다
  </script>
```

### 12. 위치관련 메서드

- offset() : top이나 left같은 값을 변경시킬 수 있다.
- position() :

```html
<body>
  <div class="di">
    <p class="p1">
      jQuery는 웹의 기본 메서드나 선택자 개념을 익히는데 큰 도움을 줍니다. 특히
      jQuery로 작업을 하다보면 자연스럽게 Web API를 배울 수 밖에 없고, 여러
      jQuery 기반 라이브러리를 사용해보면서 라이브러리 사용법과 CSS 지식을
      확장시키는데 좋습니다.
    </p>
  </div>
  <div class="di2">
    <button class="offset">offset</button>
    <button class="position">position</button>
    <span class="pr"></span>
  </div>
</body>
<script>
  // html 기준으로 p태그의 위치를 찾는다.
  $(".offset").click(function () {
    let n = $(".p1").offset();
    $(".pr").text(n.top + " " + n.left);
  });

  // 부모요소 기준으로 p태그의 위치를 찾는다.
  $(".position").click(function () {
    let n = $(".p1").position();
    $(".pr").text(n.top + " " + n.left);
  });
</script>
```

### 13. is()

- is(): 참과 거짓을 반환한다.

```html
 <div class="di">
      <p class="p1">
        jQuery는 웹의 기본 메서드나 선택자 개념을 익히는데 큰 도움을 줍니다.
        특히 jQuery로 작업을 하다보면 자연스럽게 Web API를 배울 수 밖에 없고,
        여러 jQuery 기반 라이브러리를 사용해보면서 라이브러리 사용법과 CSS
        지식을 확장시키는데 좋습니다.
      </p>
      <span class="pr">찬반논쟁</span>
    </div>
  </body>
  <script>
    let n = $(".di").children().is("p");
    //div영역의 자식들중 p태그가 있다면 true를 없다면, flase를 반환한다.
    document.write(n);
    // true
    let m = $(".di").children().is("span");
    document.write(m); // true => div안에 span 태그가 있으니까

    if (n) {
      alert("자식요소 p태그 있음");
    }

    let z = $(".di").children().is(".pr");
    if (z) {
      alert("자식요소 .pr 클래스 있음");
    }
  </script>
```
