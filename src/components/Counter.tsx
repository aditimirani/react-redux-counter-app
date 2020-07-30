import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
const containerStyle = {
  display: 'flex'
}
const buttonStyle = {
  fontSize: '1.5rem',
  width: '40px',
  height: '40px'
}
interface CounterDataStoreState  {
  number: string
}
 const Counter:React.FC = () =>  {
   const dispatch = useDispatch();
   const number = useSelector<CounterDataStoreState>(state => state.number);

    const addOne = () => {
      dispatch({ type: 'ADD_ONE' });
    }

    const minusOne = () => {
      console.log('minus one');
      dispatch({ type: 'MINUS_ONE' });
    }

    return (
      <div className="App" >
        <header className="App-header">
          <h1>{number}</h1>
          <div style={containerStyle}>
            <button onClick={minusOne} type="button" style={buttonStyle}>-</button>
            <button onClick={addOne} type="button" style={buttonStyle}>+</button>
          </div>
        </header>
      </div>
    );
}
export default Counter;

