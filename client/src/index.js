// NOTE: SOMETHING IS WRONG WITH THE STORE. WHEN I UN-COMMENT OUT THE BELOW, THE ERRORS APPEAR
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Since we used export default, remove the curly brackets
import store from './redux/store';


//import './css/index.css';
import App from './components/App';

// import Routes from './Routes';

ReactDOM.render(<Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
