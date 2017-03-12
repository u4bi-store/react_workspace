import React from 'react';
 
 
class Content extends React.Component {
    render(){
        return (
            <div>
                <h2>{ this.props.title }</h2>
                <p> { this.props.body } </p>
                {/* ContentTitle 와 contentBody란 프로퍼티가 넘어옴 */}
            </div>
        );
    }
}
 

Content.propTypes = {
    title: React.PropTypes.string,
    body: React.PropTypes.string.isRequired
};

/* 두 props 의 Type 를 모두 string 을 지정
   body는 .isRequired 를 추가하여 필수 props로 설정
*/

export default Content;