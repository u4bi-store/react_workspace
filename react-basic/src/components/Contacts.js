import React from 'react';

import ContactInfo from './ContactInfo';

class Contacts extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = { /* state 추가 */
            contactData: [
                {name: "Abet", phone: "010-0000-0001"},
                {name: "Betty", phone: "010-0000-0002"},
                {name: "Charlie", phone: "010-0000-0003"},
                {name: "David", phone: "010-0000-0004"}
            ]
        };
    }
    render(){
        return(
            <div>
                <h1>Contacts</h1>
                <ul>
                    <ContactInfo name="Abet" phone="010-0000-0001"/>
                    <ContactInfo name="Betty" phone="010-0000-0002"/>
                    <ContactInfo name="Charlie" phone="010-0000-0003"/>
                    <ContactInfo name="David" phone="010-0000-0004"/>
                </ul>
                <ul>
                    {/* 렌더링 부분 배열 mapping 으로 교체 */}
                    {this.state.contactData.map((contact, i) => {
                        return (<ContactInfo name={contact.name}
                                             phone={contact.phone}
                                             key={i} /* key가 사용 이는 child 컴포넌트에 identity(독자성)을 부여*/
                                 />);
                    })}
                </ul>
            </div>
        );
    }
}

export default Contacts;