/**
 * 단어를 입력하고 버튼을 누르면 => onclick()
 * input 태그의 값을 읽으려면 => document.getElementById("이름").word
 * 제시어의 끝 글자와 첫글자를 비교 => 변수에 제어의 끝 글자를 할당, 각각의 단어의 첫글자를 변수에 할당하여 비교
 * 같다면 "정답입니다"를 표시하고 제시어를 입력값으로 변경, 다르다면 "땡!" 출력하고 제시어는 병경하지 않음.
 */

const startWord = () => {
  let myword = document.getElementById("myword").value;
  let word = document.getElementById("word").innerText;
  const lastWord = word[word.length - 1];
  let firstWord = myword[0];

  if (lastWord === firstWord) {
    document.getElementById("result").innerText = "정답입니다";
    document.getElementById("word").innerText = myword;
    document.getElementById("myword").value = "";
  } else {
    document.getElementById("result").innerText = "떙!";
    document.getElementById("myword").value = "";
  }
};

const startLotto = () => {
  const result = [];

  const maxNumber = 45;

  for (let i = 0; i < 6; i++) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    } while (result.includes(randomNumber));

    result.push(randomNumber);
  }
  document.getElementById("one").innerText = result[0];
  document.getElementById("two").innerText = result[1];
  document.getElementById("three").innerText = result[2];
  document.getElementById("four").innerText = result[3];
  document.getElementById("five").innerText = result[4];
  document.getElementById("six").innerText = result[5];
};
