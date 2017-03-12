import React from 'react';
import ReactDOM from 'react-dom';


class RandomNumber extends React.Component {
    updateNumber(){
        let value = Math.round(Math.random()*100);
        console.log('value b: ', value);

        this.props.onUpdate(value); /* App.js에서 props로 받은 함수를 실행함
                                    */
        /* onUpdate: function 형태의 prop임
                     parent 컴포넌트에 정의된 메서드를
                     실행 할 수 있게 해줌
        */
        console.log('value a: ', value);
    }
    
    constructor(props){ /* React 컴포넌트의 생성자 */
        super(props);
        console.log(props);
        /* props로 super로 상속받은
           React.Component의 생성자 메소드를 실행 한 후

           위에 입력했던 코드를 실행함 
        */

        this.updateNumber = this.updateNumber.bind(this);
        /* update 메서드에서 this.props 에 접근 할 수 있도록
           binding 해줌
           
           버튼 클릭시 바인딩 되기 위함
        */

    }

    render(){
        return (
            <div>
                <h1>랜덤 숫자 : { this.props.number }</h1>
                <button onClick={this.updateNumber}>랜덤</button>
                { /* 버튼 클릭 시 updateNumber() 메서드 실행 */}

                {/* 랜덤 숫자를 나타내는 h1 element와
                    클릭 하면 새로운 랜덤값으로 바꾸는 button element를
                    렌더링 함

                    number: 랜덤 값
                */}
            </div>
        );
    }
}

export default RandomNumber;