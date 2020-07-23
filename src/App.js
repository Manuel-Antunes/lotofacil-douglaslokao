import Routes from './routes';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import GlobalStyle from './styles/global.js'
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './services/history';
import { ToastContainer } from 'react-toastify';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
