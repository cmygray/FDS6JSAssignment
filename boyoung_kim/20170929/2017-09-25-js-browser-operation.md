## Browser Support
- [브라우저별 ES6 지원 현황](https://kangax.github.io/compat-table/es6/)
- IE 에서는 ES6 지원 x (바벨, 타입스크립트등 다른방법 써야함)
* 앵귤러는 IE9까지만 지원


# 브라우저 동작 원리

웹페이지를 서버에 요청(request)하고 응답(respond)받아 브러우저에 표시하는 과정
1. 서버에서 html, css, javascript 파일을 응답받음
2. html, css는 파싱(parsing)되어 DOM, CSSOM트리로 변환
3. 이때 script태그를 만나면 html 파싱 일시중단 -> javascript 파싱 &실행
4. 중단 되었던 html, css 파싱 재게  
![브라우저 동작원리](/img/browser-operating-principle.jpg)

** DOM이 완성되지 않은 상태에서 자바스크립트가 실행되면, 에러와 페이지 로딩지연이 생길 수 있음
-> 따라서 스크립트는 body요소 가장 끝에 위치하도록 권장 (DOM이 업로드되지않아 생길 문제 방지)

## `<script>`의 async / defer 속성
* html5부터 스크립트 로딩지연으로 생기는 문제를 방지하기 위해 추가된 속성 (IE9 이하 버전 지원 X)
* 웹페이지 파싱과 외부 스크립트파일 다운로드를 동시에함  
    * async: 스크립트 다운로드 직후 스크립트 파일 실행
    * defer: 웹페이지 파싱 완료 직후 스크립트 파일 실행 (DOM 로드 오류가 적음)

