// import React from 'react';
// import Routes from './routes';
// import './config/StatusBarConfig';

// const App = () => <Routes />;

// export default App;

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './pages/home';
import Login from './pages/login';

const Routes = createAppContainer(
  createStackNavigator({
    Home: Home,
    Login: Login,
  }),
);

export default Routes;
