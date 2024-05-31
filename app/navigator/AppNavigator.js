import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {strings} from '../config';
import DrawerNavigator from './DrawerNavigator';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

function AppNavigator({isLoggedIn}) {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={isLoggedIn ? strings.DASHBOARD : strings.LOGIN}>
      <Stack.Screen name={strings.LOGIN} component={LoginScreen} />
      <Stack.Screen name={strings.DASHBOARD} component={DrawerNavigator} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
