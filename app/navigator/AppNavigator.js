import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {strings} from '../config';
import DrawerNavigator from './DrawerNavigator';
import LoginScreen from '../screens/LoginScreen';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

function AppNavigator({isLoggedIn}) {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={isLoggedIn ? strings.TabScreen : strings.LOGIN}>
      <Stack.Screen name={strings.LOGIN} component={LoginScreen} />
      <Stack.Screen name={strings.TabScreen} component={TabNavigator} />
      {/* <Stack.Screen name={strings.DASHBOARD} component={TabNavigator} /> */}
    </Stack.Navigator>
  );
}

export default AppNavigator;
