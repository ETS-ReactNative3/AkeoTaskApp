import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen'
import LoginScreen from './LoginScreen';
import UserListScreen from './UserListScreen';

const AppDrawer = createDrawerNavigator({
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
    Login: {screen: LoginScreen},
    UserList: {screen: UserListScreen},
}, {
    contentOptions: {
        labelStyle: {
            fontFamily: 'Cochin',
            fontSize: 20,
            color: 'white',
        },
    },
    style: {
        backgroundColor: '#777777',
        flex: 1
      },
    drawerWidth: 341,
});

  AppDrawer.navigationOptions = {
      header: null
  }
  
export default AppDrawer;