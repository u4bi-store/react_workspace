import React from 'react';

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
   
*/
class Header extends React.Component {
    render(){
        return (
            <h1>Header</h1>
        );
    }
}
 
class Content extends React.Component {
    render(){
        return (
            <div>
                <h2>Content</h2>
                <p> u4bi! </p>
            </div>
        );
    }
}

export default App;