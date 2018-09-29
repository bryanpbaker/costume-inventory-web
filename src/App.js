import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// components
import Layout from './components/Layout';
import CostumeList from './containers/CostumeList';
import CostumeDetail from './containers/CostumeDetail';

// set up Redux
import { Provider } from 'react-redux';
import configureStore from './redux';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={CostumeList} />
              <Route exact path="/:costumeId" component={CostumeDetail} />
            </Switch>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
