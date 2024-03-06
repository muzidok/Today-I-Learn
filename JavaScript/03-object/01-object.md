```js
["철수", "영희", "훈이", 15, 18, 17, "ㅇㅇ초등학교", "ㅁㅁ초등학교"];
```

위와같은 형태의 배열이 있다고할떄, 누구의 정보이고 어떤 정보인지 알 수 없다.
이 경우 요소들의 성격별로 객체로 만들어서 저장하면 구분하기 쉬워진다.

# Object(객체)

```js
{
  key: value;
}
```

객체는 다양한 데이터를 하나의 그룹으로 묶은 것을 말한다.
각각의 데이터는 `key`와 `value(값)`으로 연결되어있다.
객체의 키에 속성을 적어두면 어떤 특징을 가지는지 바로 확인할 수 있다.
키와 값으로 이루어진 여러개의 데이터를 하나로 묶을때는 `{ }`를 사용하고 `,`를 사용해서 구분짓는다.

```js
// 객체 선언하기
const profile = {
  name: "철수",
  age: 30,
  school: "꽃잎초등학교",
};
```

- key: 비어있을 수 없고, ""를 사용하지 않는다.
- value: 비어있어도 되고, ""를 사용해야한다.

객체에 담긴 값을 가져오는 방법으로는 **Dot Notation**과 **Bracket Notation**이 있다.
Dot Notation은 `변수명.key`을 사용하고 Bracket Notation은 `변수명["key"]`을 사용해서 가져올 수 있다.

```js
// 객체의 값 꺼내기
profile.name; // 철수
profile["name"]; // 철수

// 객체의 키&값 삭제하기
delete profile.name;
profile = {
  age: 8,
  school: "꽃샘초등학교",
};
```

아래와 같이 똑같은 키를 가진 객체들이 여러개 있을때 각각 메모리를 할당하고 불러오는 것은 비효율 적이다.
이경우 하나의 배열로 묶어서 사용하면 편리하다.

```js
const student1 = { name: "철수", age: 15, school: "oo초등학교" };
const student2 = { name: "영희", age: 18, school: "oo초등학교" };
const student3 = { name: "훈이", age: 17, school: "ㅁㅁ초등학교" };
```

```js
// 객체들을 배열에 담아서 선언
const profile = [
  { name: "철수", age: 15, school: "oo초등학교" },
  { name: "영희", age: 18, school: "oo초등학교" },
  { name: "훈이", age: 17, school: "ㅁㅁ초등학교" },
];

// 배열안의 객체에서 뽑아내기
profile[0].name; // 철수
profile[0].age; // 15
profile[0].school; // oo초등학교

// 배열 안의 객체에서 원하는 객체(8살 이상)만 뽑아내기
profile.filter((data) => data.age >= 18);

// profile = [
//    { name: "영희", age: 18, school: "oo초등학교" },
// ]
```
