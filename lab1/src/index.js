import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Travel from './Components/Travel';
import Form from './Components/Form';
import Form2 from './Components/Form2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Travel></Travel>
    
  </React.StrictMode>
);



const form2 = ReactDOM.createRoot(document.getElementById('form2'));
form2.render(
  <React.StrictMode>

    <Form2></Form2>
    
  </React.StrictMode>
);

const form1 = ReactDOM.createRoot(document.getElementById('form1'));
form1.render(
  <React.StrictMode>

    <Form></Form>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
