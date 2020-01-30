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
