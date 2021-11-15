/*
douzone-ghksxk1000-math npm 모듈 테스트 -> nodeModules로 설치를 한다 (모듈 패키지: 로컬 배포)

$ npm i ../douzone-ghksxk1002-math -> 이명령어로 모듈 설치후 태스트
*/

// 모듈 당겨오기
// 설치해서 사용할것이기 때문에 경로 지저이 필요가 없다
// var douzoneMath = require('../douzone-ghksxk1002-math/douzone-ghksxk1002-math')  // -> 실해후 객채가 하나 기어나온다. 
                                                                                 //douzoneMath가 그 객체를 가르키게 했다

// 페키지명을 리콰이어 해서 콘솔에서 다운받아서쓴다
var douzoneMath = require('douzone-ghksxk1002-math')
console.log(douzoneMath.sum(10, 20,30));
console.log(douzoneMath.max(10, 20,30));
console.log(douzoneMath.min(10, 20,30));

