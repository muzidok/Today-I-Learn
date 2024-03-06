console.log("콘솔로그를 찍어보자");

let name;

name = "홍길동";
name = "개발자"; //재할당되어서 홍길동은 유효하지않다.

/**
 * let name = "백엔드"
 * let은 재선언이 불가능하기 때문에 에러가 난다.
 */
console.log(name);

const age = "11";

/**
 * const age = "21";
 * let과 같이 재선언이 안되서 에러메세지가 바로 나타난다.
 * Uncaught SyntaxError: Identifier 'age' has already been declared
 */

age = "31";
/**
 * age = "31";
 * 재할당의경우 바로 에러 메세지가 나타나지는 않지만 저장해보면 콘솔에 표시된다.
 * Uncaught TypeError: Assignment to constant variable.
 */

console.log(age);
