import React from 'react';
import Header from './Header';
import Content from './Content';

class App extends React.Component {
    render(){
        return  (
            <div>  {/* <Header/> 와 <Content/> 는 만들 컴포넌트
                       한 파일엔 여러개의 컴포넌트가 존재가능
                    */}
                <Header/>
                <Content/>
            </div>
        );
    }
}

/* 아래처럼 이렇게 여러 class를 포함시켜
   작성 할 수 있음

   앱 규모가 커지면 유지보수가 불편함

   Component들을 모듈화 하여
   여러 파일로 분리해서
   
   사용하면 유지 보수가 훨씬 쉬워집
   
*/

export default App;