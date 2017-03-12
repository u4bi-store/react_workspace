import React from 'react'; //  require('..') 의 역할
 
class App extends React.Component { // class 개념 역시 ES6 에 새로 도입된 요소
                                    // 모든 Component는 React.Component 를 상속
    
    render(){ // render() 메소드에서는 컴포넌트에 렌더링 될 데이타를 정의
 
        return ( // 이 부분이 JSX의 가장 중요한 부분입니다.
                 // 자바스크립트에서 html 태그를 반환
                 // 따옴표같은건 없다.
                 // React JSX 는 XML-like Syntax 를 native Javascript 변환해준다.
                 // ” ” 로 감싸지 않는 점 주의
                <h1>Hello U4bi</h1>
        );
        
        // 이전에는 개발자들이 .jsx 확장자를 사용하였지만
        // 요즘은 .js 를 사용하는 추세
    }
}
 
export default App; // module.export = App 와 같습니다.

// 모두 es6에서 도입된 키워드