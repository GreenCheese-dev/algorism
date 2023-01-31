// input terms
// return 약관에 따른 유효 날짜 map
function getTermsMap(terms) {
    var termMap = new Map();
    terms.forEach(e => {
        termMap.set(e[0],e.slice(2));
    });
    return termMap;
}

function getDayMap(yyyymmdd){
    var dayMap = {"YYYY" : Number(yyyymmdd.slice(0,4)), "MM" : Number(yyyymmdd.slice(5,7)), "DD" : Number(yyyymmdd.slice(9, 11))};  
    return dayMap;
}


// input today, term, privacie
// return 폐기일
function isDelete(todayMap, term, privacy) {
    console.log(todayMap, term, privacy);
        var delMonth = term + 
        if( delMonth <= 12){

        }
    
}

function solution(today, terms, privacies) {
    var todayMap = getDayMap(today);
    var termMap = getTermsMap(terms);
    var answer = [];

    for (let i = 0; i < privacies.length; i++) {
        if(isDelete(todayMap, Number(termMap.get(privacies[i].slice(-1))), getDayMap(privacies[i].slice(0,10)))){

        }
    }
    
    return answer;
}

var today = "2022.05.19";
var terms = ["A 6", "B 12", "C 3"];
var privacies = ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"];

solution(today, terms, privacies);