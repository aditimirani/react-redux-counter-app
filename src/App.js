import React from 'react';
import { Provider } from 'react-redux';
import image from './img/webpack.png'
import Counter from './Counter';
import store from './store';

import styles from './App.css';

 const App = () => {
    return(
        <Provider store={store}>
            <Counter/>
        </Provider>)
}
export default App;
