import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Chat from './components/Chat';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1 className="text-center text-2xl p-4">Real-Time Chat</h1>
        <Chat />
      </div>
    </Provider>
  );
}

export default App;
