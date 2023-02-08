import React from 'react';
import ReactDOM from 'react-dom/client';

const Hello = (props) =>
  (<div><p>Hello {props.name}, you are {props.age} years old</p></div>)

const App = () => {
  const name= 'Peter'
  const age = 18
  return(
    <div>
      <h1>Greetings!</h1>    
      <Hello name={name} age={age}/>
      <Hello name='Mary' age={18+3}/>
    </div>

  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


