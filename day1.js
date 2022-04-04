//랜덤번호 지정
//유저가 번호를 입력한다, 그리고 go 라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호 < 유저번호 Down!!
//랜덤번호 > 유저번호 Up!!
//Reset 버튼을 누르면 게임이 리셋된다
//5번의 기회를 다 사용하면 게임이 끝난다 (버튼 disable)
//유저가 1~100 범위 밖 숫자를 입력하면 알려준다. (기회 유지)
//유저가 이미 입력한 숫자를 또 입력하면 알려준다. (기회 유지)

let Cnum = 0;
let Unum = document.getElementById("Unum");
let playButton = document.getElementById("play-button");
let result = document.getElementById("result");
let reset = document.getElementById("reset");
let chance = 5;
let gameover = false;
let Chnum = document.getElementById("chance");
let history = [];

playButton.addEventListener("click", play);
reset.addEventListener("click", reset1);
Unum.addEventListener("focus", function () {
  Unum.value = "";
});

function pickRandomNum() {
  Cnum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", Cnum);
}

pickRandomNum();

function play() {
  let Uvalue = Unum.value;

  if (Uvalue > 100 || Uvalue < 1) {
    result.textContent = "결과 : 1~100 사이의 번호를 입력해주세요";
    return;
  }

  if (history.includes(Uvalue)) {
    result.textContent = "결과 : 이미 입력한 숫자입니다";
    return;
  }

  chance--;
  Chnum.textContent = `남은 기회 : ${chance}`;

  if (Cnum == Uvalue) {
    result.textContent = "결과 : 당첨";
    gameover = true;
  } else if (Cnum < Uvalue) {
    result.textContent = "결과 : DOWN";
  } else if (Cnum > Uvalue) {
    result.textContent = "결과 : UP";
  }

  history.push(Uvalue);
  console.log(history);

  if (chance < 1) {
    gameover = true;
  }

  if (gameover == true) {
    playButton.disabled = true;
  }
}

function reset1() {
  // user input창이 깨끗하게 정리되고
  // 새로운 번호가 생성된다
  chance = 5;
  Unum.value = "";
  playButton.disabled = false;
  gameover = false;
  pickRandomNum();
  history.splice([0, 6]);
  Chnum.textContent = `남은 기회 : ${chance}`;
}
