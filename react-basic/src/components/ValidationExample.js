import React from 'react';


class ValidationExample extends React.Component {

}
/* https://facebook.github.io/react/docs/components-and-props.html
 */

Content.propTypes = {

    /* JS 고유 타입 (원시 타입) */
    optionalArray: React.PropTypes.array,
    optionalBool: React.PropTypes.bool,
    optionalFunc: React.PropTypes.func,
    optionalNumber: React.PropTypes.number,
    optionalObject: React.PropTypes.object,
    optionalString: React.PropTypes.string,

    /*  렌더링 될 수 있는 모든요소
        (numbers, string, elements, array, fragment)
    */
    optionalNode: React.PropTypes.node,

    /* 리엑트 엘리먼트 React element */
    optionalElement: React.PropTyps.element,

    /* 특정 클래스의 인스턴스 */
    optionalMessage: React.PropTypes.instanceOf(Message),

    /* 특정 값으로 제한 */
    optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

    /* 나열된 종류중 하나일 때 */
    optionalUnion: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.propTypes.number
    ]),

    /* 특정 타입의 배열일 때 */
    optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

    /* 특정 유형의 값을 가진 객체일 때 */
    optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

    /* 객체안의 프로퍼티가 특별한 유형을 가졌을 때 */
    optionalObjectWithShape: React.PropTypes.shape({
        color: React.PropTypes.string,
        fontSize: React.PropTypes.number
    }),

    /* 함수를 필수적으로 제한 */
    requiredFunc: React.PropTypes.func.isRequired,

    /* 특정 데이터타입을 필수적으로 제한 */
    requiredAny: React.PropTypes.any.isRequired,

    /* 사용자가 정의한 유효검사 양식 */
    customProp: function(props, propName, componentName) {
      if (!/matchme/.test(props[propName])) {
        return new Error('유효성 실패!');
      }
    }
};


export default ValidationExample;