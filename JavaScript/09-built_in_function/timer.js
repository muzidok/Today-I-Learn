const isStarted = false;

function auth() {
  if (isStarted) {
    isStarted = ture;
    document.getElementById("finish").disabled = false;
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("target").innerText = token;

    let time = 10;
    let timer;
    timer = setInterval(function () {
      if (time >= 0) {
        let min = Math.floor(time / 60);
        let sec = String(time % 60).padStart(2, "0"); // 2자리가 아닐경우 0을 채움
        document.getElementById("timer").innerText = min + ":" + sec;
        time = time - 1;
      } else {
        document.getElementById("finish").disabled = true;
        isStarted = false;
        clearInterval(timer); // setInterval 함수가 문한히 반복되서 인터벌을 비활성하가기위해 넣음
      }
    }, 1000);
  } else {
  }
}
