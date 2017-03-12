import React from 'react';

/* 컴포넌트에서 유동적인 데이터를 다룰 때 state 를 사용해야 한다고 함
   
   state를사용하는 컴포넌트 갯수를 최소하는 것을 노력해야 한다고 함.
   
   예로 10개의 컴포넌트에서
   유동적인 데이터를 사용하게 될 땐

   각 데이터에 state를 사용할게 아니라
   props를사용하고
   
   10개의 컴포넌트를 포함시키는
   container 컴포넌트를 사용하는 것이
   
   효율적이라고 함.
*/
class StateExample extends React.Component {
   constructor(props) {
        super(props);


        /* state 의 초기 값을 설정 할 때는
           constructor(생성자) 메서드에서 this.state= { } 를 통해 설정 */
        this.state = {
            header: "헤더 초기화 상태",
            content: "콘텐트 초기화 상태"
        }; /* state 를 렌더링 할 때는
           { this.state.이름 } 을 사용합니다. */
   }

   updateHeader(text){
       this.setState({ /* state를 갱신할 땐 this.setState() 메서드를 사용해야 함 */
           header: "헤더 체인지"
       });
   }

   render() {
      return (
         <div>
            <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
            <button onClick={this.updateHeader.bind(this)}>체인지</button>
            { /* ES6 class에선 auto binding이 되지 않음
                 따라서 setState 메서드를 사용 하게 될 메서드를
                 bind해줘야 한다고 함.

                 bind하지 않으면 React Component가
                 가지고있는 멤버 함수 및 객체에 접근 할 수 없다고 함.
               */}
         </div>
      );
   }
}

export default StateExample;