/*
douzone-ghksxk1000-math 파일 모듈 테스트
*/

// 모듈 당겨오기
var douzoneMath = require('../douzone-ghksxk1002-math/douzone-ghksxk1002-math')  // -> 실해후 객채가 하나 기어나온다. 
                                                                                //douzoneMath가 그 객체를 가르키게 했다

console.log(douzoneMath.sum(10, 20,30));
console.log(douzoneMath.max(10, 20,30));
console.log(douzoneMath.min(10, 20,30));

