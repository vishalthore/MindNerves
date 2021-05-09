import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './components/store/index';
// import App from './components/get/App';

ReactDOM.render(
<Provider store={store}>   
<App />
</Provider> , document.getElementById('root'));
