// 숫자 야구 게임
// 컴퓨터에서 랜덤으로 1~100 숫자가 생성된다
// 유저가 숫자를 입력하고 GO를 눌러 맞출 수 있다
// 컴퓨터의 숫자보다 높으면 DOWN 낮으면 UP으로 힌트를 준다 (맞추면 당첨)
// 기회는 총 5번
// 똑같은 숫자나 1~100사이가 아닌 숫자를 입력하면
// 텍스트를 통해 알려주며 기회는 유지된다
// 리셋 버튼을 누르면 숫자가 다시 생성되며 기회 또한 초기화된다

let user = document.getElementById("user");
let go = document.getElementById("go");
let reset = document.getElementById("reset");
let result = document.getElementById("result");
let chnum = document.getElementById("chnum");
let image = document.getElementById("image");

let Cnum;
let chance = 5;
let gameOver = false;
let history = [];

go.addEventListener("click", gobtn);
reset.addEventListener("click", resetbtn);
user.addEventListener("click", function (){
  user.value = ""
})




function gobtn() {
  userNum = user.value;

  if (userNum > 100 || userNum < 1) {
    result.textContent = "1 ~ 100 사이의 숫자를 입력해주세요";
    user.value = ""
    return;
  }

  if (history.includes(userNum)) {
    result.textContent = "이미 입력한 숫자입니다";
    user.value = ""
    return;
  }

  if (userNum == Cnum) {
    result.textContent = "홈런!!!! 숫자를 맞췄습니다";
    image.src = "https://dcimg4.dcinside.co.kr/viewimage.php?id=3ebcdd35f0dc3faa67b0d8a629df212a&no=24b0d769e1d32ca73deb84fa11d028312df59e65a1669310d97d6b8665a6ed9722e2ebfec2a9ef2611795f3504417b7b47a5668159d043a0a3aad231e5db78dedf7df91cce050a204092c6f2df266be058c6"
    go.disabled = true;
    user.value = ""
    
  } else if (userNum > Cnum) {
    result.textContent = "볼! 숫자가 너무 높습니다";
    image.src = "https://thumbs.gfycat.com/YearlySophisticatedHind-size_restricted.gif"
    user.value = ""
    
  } else if (userNum < Cnum) {
    result.textContent = "스트라이크! 숫자가 너무 낮습니다";
    image.src = "https://i0.wp.com/yachin.kr/wp-content/uploads/2021/04/1-30.gif?resize=640%2C360&ssl=1"
    user.value = ""
  }

  chance--;
  chnum.textContent = `남은 타석 : ${chance}`;
  history.push(userNum);
  console.log(history);

  if (chance < 1) {
    gameOver = true;
  }

  if (gameOver == true) {
    go.disabled = true;
  }
}

function resetbtn() {
  Rnum();
  console.log(Cnum);
  chance = 5;
  gameOver = false;
  go.disabled = false;
  history.splice(0, 6);
  chnum.textContent = `남은 타석 : ${chance}`;
  result.textContent = "숫자를 맞춰 홈런을 날려보세요";
  user.value = ""
}

function Rnum() {
  Cnum = Math.floor(Math.random() * 100) + 1;
}

Rnum();
console.log(Cnum);


