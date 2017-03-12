import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
 
const rootElement = document.getElementById('root');
ReactDOM.render(<App headerTitle = "u4bi header title"
                     contentTitle = "u4bi content title"
                     contentBody = "u4bi content body"/>, rootElement);

// App 컴포넌트를 불러와서 root element

// 프로퍼티들 넘김 App.js로