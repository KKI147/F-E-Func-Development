# 프로젝트 목적
프론트 개발자가 자주 사용하는 서비스를 학습하고 개발해보는 과정

## 목표
<ul>
<li>로그인 및 회원가입</li>
<li>파일 업로드 및 다운로드</li>
<li>마크다운 문법을 적용한 에디터기능</li>
<li>메일 보내기</li>
<li>달력</li>
<li>kakao map</li>
<li>intersection observer</li>
<li>loading component</li>
</ul>

### 🔗[페이지 이동하기](https://f-e-func-development.vercel.app/)

## **🛠️ 스택**

<div>
<img src="https://img.shields.io/badge/html-1572B6?style=for-the-badge&logo=html5&logoColor=white"> 
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
<br>
 <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/Next.js-339933?style=for-the-badge&logo=Next.js&logoColor=white">
 <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
 </div>
<br>

## **❗ 사용 기술**
<ul>
 
 <li>로그인 & 회원가입</li>
 <div>ㄴ Reack Form을 사용하여 value값을 획득후 required, matches 등과 같은 hook을 사용하여 유효성을 검증</div>
 <br>
 <li>Email send</li>
 <div>ㄴ email js의 와 Reack Form을 사용하여 email형식의 유효성을 검증하고 sendForm hook을 사용하여 return값을 promise로 반환</div>
  <br>
 <li>Styled-Components</li>
 <div>ㄴ 공통적인 css를 작성한 후 개별 layout에 따라 필요한 값을 props로 전달하여 코드의 재사용성을 높임</div>
 <br>
  <li>Intersection-Observer</li>
 <div>ㄴ Intersection-Observer API를 사용하여 관찰자 객체를 통한 교차점을 관찰한후 타겟을 지정하여 타겟에 뷰포인트가 위치하면 스크롤이 형식되는 구조</div>
 <div>ㄴ useEffect 내의 함수에서 값이 undefined가 발생</div>
 <div> ㄴ useEffect또한 javascript의 실행 방식대로 위에서 아래로 실행되는 구조이기 때문에 useEffect의 순서를 조절</div>
 <div>ㄴ 기존 fetch함수에서 data값을 반아온 후 재 요청을 하였을시 data값이 추가되는 것이 아닌 덮어씌어지는 현상 발생</div>
 <div> ㄴ 스프래드 연산자를 이용하여 값을 복사 후 새로운 data값을 배열에 저장</div>
 </ul>

## **📌 회고**
<ul>
 
 </ul>
