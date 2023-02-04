// programers
// https://school.programmers.co.kr/learn/courses/30/lessons/150370?language=javascript

// input terms
// return 약관에 따른 유효 날짜 map
function getTermsMap(terms) {
  var termMap = new Map();
  terms.forEach((e) => {
    termMap.set(e[0], e.slice(2));
  });
  return termMap;
}

function getDayObj(yyyymmdd) {
  var dayMap = {
    YYYY: Number(yyyymmdd.slice(0, 4)),
    MM: Number(yyyymmdd.slice(5, 7)),
    DD: Number(yyyymmdd.slice(8, 11)),
  };
  return dayMap;
}

// input term, privacie
// return 폐기일
function getDelDate(term, privacy) {
  var delMonth = term + privacy.MM;
  if (delMonth > 12) {
    let addYear = ~~(delMonth / 12);
    privacy.YYYY += addYear;
    delMonth %= 12;
    privacy.MM = delMonth;
  } else {
    privacy.MM = delMonth;
  }
  return privacy;
}

function transDay(map) {
  day = map.YYYY * 12 * 28 + map.MM * 28 + map.DD;
  return day;
}
// input today, term, privacie
// return bool 삭제: ture
function isDelete(todayMap, term, privacy) {
  privacy = getDelDate(term, privacy);
  return transDay(todayMap) >= transDay(privacy) ? true : false;
}

function solution(today, terms, privacies) {
  var todayMap = getDayObj(today);
  var termMap = getTermsMap(terms);
  var answer = [];

  for (let i = 0; i < privacies.length; i++) {
    if (isDelete(todayMap, Number(termMap.get(privacies[i].slice(-1))), getDayObj(privacies[i].slice(0, 10)))) {
      answer.push(i + 1);
    }
  }
  return answer;
}

var today = '2020.01.01';
var terms = ['Z 3', 'D 5'];
var privacies = ['2019.01.01 D', '2019.11.15 Z', '2019.08.02 D', '2019.07.01 D', '2018.12.28 Z'];

console.log(solution(today, terms, privacies));
