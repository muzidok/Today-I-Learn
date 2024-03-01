css에는 기본값이라는 속성이 존재한다. 그래서 아무것도 입력하지않은경우 브라우저의 좌측상단에 배치된다.
그렇다면 이 좌측상단에 배치된 요소를 가운데로 옮기려면 어떻게 해야할까?
참고로 대각선으로 이동하는 코드는 없다.

# 1. 정렬

css에서 정말 중요한 부분이 정렬인거같다.
갑작스럽게 프론트엔드 과정에 참여하게되면서 정렬을 제대로 알지 못한채 프로젝트를 진행하였고, 화면의 사이즈가 변동될때나 다른 요소들이 추가될때 화면이 깨지는것을 경험해본적이있다.

정렬의 방법으로는 `flex`,`position`, `gird`가 많이 사용된다.

> **HTML의 block 과 inline**
>
> HTML에는 block요소와 inline 요소가 있다.
> `block`의 경우 요소가 수직으로 쌓이게 된다.
> `inline`의 경우 요소가 필요한 사이즈 만큼만 차지해서 수평으로 붙으면서 쌓이게 된다.
> 그래서 원하는 css를 주기 어려운 경향이 있다.

## 1. flex

📌 flex는 컨텐츠들의 정렬,배치를 담당하는 기능으로 굉장히 많이 사용된다.

flex는 **여러 태그들을 하나로 묶어**서 **정렬**해준다.
중요한 것은 정렬의 기준이 필요하여, 부모박스를 기준으로두고 움직인다.
div 태그를 사용한다고 했을때 div는 기본적으로 block속성이기때문에 세로로 정렬된다.
여기서 display:flex를 사용하면 기본값에의해 수평으로 정렬된다.

```css
/* 부모박스 */
display: flex;

/* 행기준: row, 부모박스내에서 자식들이 가로로 정렬,추가된다.*/
flex-direction: row;

/*  열기준: column, 부모박스내에서 자식들이 세로로 정렬,추가된다. */
flex-direction: column;

/* flex-direction을 기준으로 부모박스의 가로를 기준으로 자식박스를 가운데 정렬한다 */
justify-content: center;

/* flex-direction 기준으로 부모박스의 세로를 기준으로 자식박스를 정렬한다 */
align-items: center;
```

| flex-direction | justify-content | align-items |
| :------------: | :-------------: | :---------: |
|    → (row)     |        →        |      ↓      |
|   ↓ (column)   |        ↓        |      →      |

이외에도 정렬 속성으로는 `space-between`,`space-around`,`space-evenly` 가 있다.

- space-between : 아이템 사이에 균일 간격을 정렬한다.
- space-around : 아이템 둘레에 균일한 간격으로 정렬한다.
- space-evenly : 아이템 사이, 양끝에 균일한 간격으로 정렬한다.

---

## 2. position

flex에 종속되지 않고, 박스를 개별적으로 위치시킬 수 있다.
position에는 `absolute`, `relative`, `fixed`,`static`이 있다.
position에 속성을 지정하지 않았다면 기본적으로 static이 적용된다.

- absolute : 박스가 절대적인 위치를 지정한다
- relative : 부모박스(상위박스)를 기준으로 상대적인 위치를 지정
- fixed : 브라우저의 화면을 기준으로 절대적인 위치에 고정
- static :

> absolute vs fixed
> absolute는 페이지 자체에 위치를 고정시키나, fixed는 화면을 기준으로 한다.
> 화면 의 네비게이션바를 absolute로하면 스크롤시 위아래로 따라올 수 있다.

```css
/* 박스의 절대 위치 */
div {
  position: absolute;
  top: 0px;
  left: 0px;
}

/* 부모 박스 기준으로 상대위치 */
div {
  position: relative;
  top: 0px;
  left: 0px;
}

/* 화면을 기준으로한 절대 위치 */
div {
  position: fixed;
  bottom: 0px;
}
```

📌 position: fixed는 화면을 기준으로 고정시키고 싶은 박스가 있는경우에 사용된다.

```html
<!-- 모바일 내비게이션바 화면 하단에 고정하기 -->
<head>
  <style>
    .wrapper {
      position: fixed;
      bottom: 0px;
    }
  </style>
</head>
<body>
  <div>
    <div class="wrapper">
      <div>홈</div>
      <div>잇츠로드</div>
      <div>마이홈</div>
      <div>마이</div>
    </div>
  </div>
</body>
```

---

## 3. grid

grid를 사용하면 행과 열을 사용하여 복잡한 레이아웃을 쉽게 만들 수 있다.
하지만 flex보다 사용하기가 어렵기때문인지 생각보다 실무에서 사용하는 비중이 낮다.

1. Container(컨테이너)

- `display: grid;`를 사용하여 그리드 레이아웃을 생성하는 부모 요소이다.

```css
.container {
  display: grid;
}
```

- Columns and Rows(열과 행)

`grid-template-columns` 나 `grid-template-rows` 속성을 사용하여 그리드의 열과 행을 정의한다.

```css
.container {
  display: grid;
  grid-template-columns: 100px 200px 100px;
  grid-template-rows: 50px 100px;
}
```

- Grid Items(그리드 아이템)
  그리드의 `각 셀에 해당하는 자식 요소`를 그리드 아이템이라고 한다다.

```html
<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```

- Grid Lines(그리드 라인)
  그리드 라인은 그리드의 열과 행 사이의 가상의 선이다.

```css
.container {
  display: grid;
  grid-template-columns: 100px 200px 100px;
  grid-template-rows: 50px 100px;
}
```

이경우 3개의 열이므로 수평 그리드 라인은 4개가 된다.

- Grid Gaps(그리드 간격)
  `grid-gap` 또는 `grid-row-gap`, `grid-column-gap`을 사용하여 그리드 아이템 간의 간격을 지정할 수 있다.

```css
.container {
  display: grid;
  grid-template-columns: 100px 200px 100px;
  grid-template-rows: 50px 100px;
  grid-gap: 10px; /* 모든 간격에 적용 */
  /* 또는 */
  /* grid-row-gap: 10px; */
  /* grid-column-gap: 10px; */
}
```

- Grid Template Areas(그리드 템플릿 영역)
  `grid-template-areas`를 사용하여 특정 그리드 아이템을 그리드의 `특정 영역에 배치`할 수 있다.

```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}
```

이러한 속성들을 조합하여 유연하고 복잡한 레이아웃을 만들 수 있다.
grid는 반응형 및 효율적인 레이아웃을 설계하는데 효과적이다.

처음 반응형을 구현했을때 flex를 몰라서 사용해봤는데 할 줄만 알면 flex보다 더 편한거같다고 생각했던 기억이있다.
