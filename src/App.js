import React, { Component } from 'react';
// components
import Layout from './components/Layout';
import CostumeList from './containers/CostumeList';

// set up Redux
import { Provider } from 'react-redux';
import configureStore from './redux';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Layout>
          <CostumeList />
        </Layout>
      </Provider>
    );
  }
}

export default App;
