import React from 'react'; //  require('..') 의 역할
 
class App extends React.Component { // class 개념 역시 ES6 에 새로 도입된 요소
                                    // 모든 Component는 React.Component 를 상속
    
    say(){
       alert("u4bi");
    }

    render(){ // render() 메소드에서는 컴포넌트에 렌더링 될 데이타를 정의
        let text = "u4bi"; // let키워드는 var 과 비슷하지만 var 변수의 scope는 기본적으로 함수 단위인데
                           // let은 블럭 범위 내에서 변수를 선언함

                           // 따라서 가끔 발생하는 javascript 의 Scope관련 문제를 해결 할 수 있음

                           // let을 사용하는것이 필수는 아니지만, ES6 에선 평상시 let 을 쓰고 var은 필요한 상황에서만 사용

        return ( // 이 부분이 JSX의 가장 중요한 부분입니다.
                 // 자바스크립트에서 html 태그를 반환
                 // 따옴표같은건 없다.
                 // React JSX 는 XML-like Syntax 를 native Javascript 변환해준다.
                 // ” ” 로 감싸지 않는 점 주의
                <div>
                    <h1> Hello U4bi </h1>
                    <h2> Welcome {text} </h2>

                    <button onClick={this.say}>click</button>
                    <p>{1 == 1 ? 'True' : 'False'}</p>
                </div>
                // If-Else 문 사용 불가
                // JSX 안에서 사용되는 JavaScript 표현에는
                // If-Else 문이 사용 불가
                // 이에 대한 대안은
                // ternary ( condition ? true : false )
                // 표현을 사용함
                
                // 예:  <p>{1 == 1 ? 'True' : 'False'}</p>

                // {this.say} 를 통해 버튼이 클릭되면
                // 해당 메소드가 실행

                // () 가 뒤에 안붙어있다는점을 주의
                // 만약에 () 가 붙으면 페이지가 로드 될때도 실행되고
                // 클릭할때도 실행 됨.

                // 여러 Element 를 렌더링 해야 할 때,
                // 그 element들을 필수적으로 container element 안에
                // 포함시켜줘야 함
                
                // 즉  div element 를 wrapper 로 사용하면 됨

                // JSX 안에서, JavaScript 표현을 사용하는 방법은
                // 매우 간단
                // 그냥 { } 로 wrapping 하면 됨
        );
        
        // 이전에는 개발자들이 .jsx 확장자를 사용하였지만
        // 요즘은 .js 를 사용하는 추세
    }
}
 
export default App; // module.export = App 와 같습니다.

// 모두 es6에서 도입된 키워드