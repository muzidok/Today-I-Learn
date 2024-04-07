# <center>📆 4월 7일</center>

DOM을 사용해서 계산기를 만들어보는 과제가있어서 만들어보았다.

## 과제 계산기 만들기

![](https://velog.velcdn.com/images/kimsu10/post/a05d51f3-645a-48dd-8f16-c0fef4ae30a1/image.png)

```html
<input type="text" value="0" id="result" />
<div class="btn_box">
  <span class="btn_span">
    <button class="ac" onclick="reset()">
      <span class="txt">AC</span>
    </button>
    <button class="circle" onclick="operate('%')">
      <span class="txt operator">%</span>
    </button>
    <button class="per circle" onclick="operate('/')">
      <span class="txt operator">&divide;</span>
    </button>
  </span>
  . . .
</div>
```

지금 글을 쓰면서 코드를 다시보니  
 '이 긴 html코드를 js로 for문을 돌려서 역동적으로 태그를 생성했다면 코드가 정말 간결해졌텐데!?' 라는 생각이 번쩍였다.  
왜 꼭 쉴떄 생각이 날까..

### ISSUE

처음에는 input을 button타입으로 value를 줘서 버튼을 생성했었다.  
하지만 글자크기가 변하지 않았고,button태그로 바꿔도 바뀌지 않았다.  
개발자 도구를 열어서 확인해보니 브라우저에 지정된 스타일이 적용된거같았다.  
css reset을 쓰자니 선생님께서 원하는 방식이 아닌거 같아서 고민하고있었는데,  
 span태그를 스타일을 주는용도로 쓴다고 하셨던 말이 생각났다.
그렇게 span 태그를 사용하니 스타일을 줄 수 있었다.

---

---
