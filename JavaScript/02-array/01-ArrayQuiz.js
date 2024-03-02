/**
 * developer라는 변수를 만들고, 자신이 원하는 개발자로의 성공 키워드가 5개 담겨있는 배열을 할당한 뒤
 * 가장 중요하다고 생각하는 키워드를 index를 이용하여 콘솔에 표시해보자.
 */

const developer = ["백엔드", "소통력", "에러핸들링", "알고리즘", "노력"];

console.log(developer[1]);
console.log(developer[2]);
console.log(developer[3]);
console.log(developer[4]);
console.log(developer[5]);

/**
 * dream이라는 변수에 ["커리어점프", "성공", "할수있다"] 배열을 할당한 뒤 developer 배열과 하나로 합쳐보자.
 */

const dream = ["커리어점프", "성공", "할수있다"];

console.log(developer.concat(dream));

/**
 * 1. abc123@gmail.com 이라는 문자열을 받았을때 @를 포함하고 있는지 확인 하여 boolean이 나타나도록 만들어보자.
 * 2. 계정주소와 회사주소를 분리하여 계정정보의 숫자만 가려보자.
 * 3. 다시 하나의 주소로 합쳐주기.
 */

const account = "abc123@gmail.com";

// 1. @ 포함여부에따라 이메일인지 확인.
account.includes("@"); //true

// 2. @를 기준으로 유저계정과 주소를 나누어서 변수에 할당함.
account.split("@"); // ['abc123', 'gmail.com']
let userAccount = account.split("@")[0]; // 'abc123'
let mailAddress = account.split("@")[1]; // 'gmail.com'

// 3. 마스킹 처리할 빈배열을 만들고 하나씩 요소를 집어넣음.
let maskedMail = [];
maskedMail.push(userAccount[0]); // ['a']
maskedMail.push(userAccount[1]); // ['a','b']
maskedMail.push(userAccount[2]); // ['a','b','c']
maskedMail.push("*"); // ['a','b','c','*']
maskedMail.push("*"); // ['a','b','c','*','*']
maskedMail.push("*"); // ['a','b','c','*','*','*']

// 4. join을 사용하여 하나의 문자열로 합침.
maskedMail.join("-"); // 'a-b-c-*-*-*'
maskedMail.join(""); // 'abc***'
const result = maskedMail.join("") + "@" + mailAddress;
console.log(result); // 'abc***@gmail.com"
