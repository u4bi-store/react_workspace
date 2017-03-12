import React from 'react';
import Header from './Header';
import Content from './Content';
import StateExample from './StateExample';

class App extends React.Component {
    render(){
        return  (
            <div>  {/* <Header/> 와 <Content/> 는 만들 컴포넌트
                       한 파일엔 여러개의 컴포넌트가 존재가능
                    */}
                <Header  title={ this.props.headerTitle } />
                <Content title={ this.props.contentTitle }
                         body={ this.props.contentBody }/>
                         { /*
                            App 컴포넌트에서 사용되는 props 값을
                            child 컴포넌트들로 전달할꺼임.

                            index.js에서 넘어온 headerTitle을
                            해더에 title이란 프로퍼티로 정의하여 넘김

                            아래도 마찬가지

                            콘텐츠에는
                                index.js에서 넘어온 두 프로퍼티를

                                title이란 프로퍼티로 정의해서 넘기고
                                하나는 body라는 프로퍼티로 정의해서 넘김

                         */}
                <StateExample/>
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

App.defaultProps = {
    headerTitle: 'u4bi not header title',
    contentTitle: 'u4bi not content title',
    contentBody: 'u4bi not content body'
};

export default App;