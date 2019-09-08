import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';

import React from 'react';
import {Provider} from 'react-redux';

import Routes from '~/routes';
import store from '~/store';

//Components
import {Player} from './components';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
      <Player />
    </Provider>
  );
};

export default App;
