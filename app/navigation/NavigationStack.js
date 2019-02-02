import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from 'app/features/login/containers/LoginContainer';
import Home from 'app/features/home/containers/HomeContainer';

const RNApp = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: { header: null }
        },
        Home: {
            screen: Home,
            navigationOptions: { header: null }
        }
    },
    {
        initialRouteName: 'Login'
    }
);

export default createAppContainer(RNApp);
