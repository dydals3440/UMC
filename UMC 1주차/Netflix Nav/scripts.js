// left navbar

const open_btn = document.querySelector('.open-btn');
const close_btn = document.querySelector('.close-btn');
// black, red, white
const nav = document.querySelectorAll('.nav');

open_btn.addEventListener('click', () => {
  nav.forEach((nav_el) => nav_el.classList.add('visible'));
});

close_btn.addEventListener('click', () => {
  nav.forEach((nav_el) => nav_el.classList.remove('visible'));
});

// auto text effect
const textEl = document.getElementById('text'); // <div id="text">ㅁㅇㄴㅇ<text>
const speedEl = document.getElementById('number');
const text = '나만의 넷플릭스 홈페이지에 오신 것을 환영합니다.';
// 초기 인덱스 세팅
let idx = 1;
// 초기 스피드 값 세팅
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx++;
  // 문자열 전체 다 출력했으면 다시 처음부터 초기화!
  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

// number버튼 클릭시 마다 속도가 변동되게 제어 설정!
speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value));

// Hidden Search Toggle
const search = document.querySelector('.search');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
});
