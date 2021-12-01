import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App /> 
    {/* app을 써서 이 라인을 index.html의 root에 꽂고싶다 */}
  </React.StrictMode>,
  document.getElementById('root')
);
