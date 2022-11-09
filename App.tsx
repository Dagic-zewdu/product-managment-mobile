import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persists} from './src/redux/store';
import StackNavigatorComponent from './src/screens';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persists}>
        <StackNavigatorComponent />
      </PersistGate>
    </Provider>
  );
};

export default App;
