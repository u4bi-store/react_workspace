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

export default Content;