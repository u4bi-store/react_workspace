import React from 'react';

class ContactInfo extends React.Component {
    render() {
        return( /* 이름과 전화번호가 나타날 부분에 props */
            <li>{this.props.name} {this.props.phone}</li>
        );
    }
}

export default ContactInfo;