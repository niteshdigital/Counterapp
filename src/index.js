import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Create a root.
const root = ReactDOM.createRoot(document.getElementById('root'));

// function HelloWorld() {
//   return (
//     <>
//     <h1>Hello world!</h1>
//     <p>This is a React component</p>
//     </>
//   )
// }

// Initial render
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);


