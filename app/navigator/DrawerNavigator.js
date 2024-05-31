import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {logout} from '../auth/Authenticate';
import {strings} from '../config';
import ProductsList from '../screen/ProductsList';
import SearchScreen from '../screen/SearchScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItem
              label={'Products List'}
              onPress={() => {
                props.navigation.navigate(strings.PRODUCTSLIST);
              }}
            />
            <DrawerItem
              label={'Search'}
              onPress={() => {
                props.navigation.navigate(strings.SEARCHSCREEN);
              }}
            />
            <DrawerItem
              label={'Logout'}
              onPress={async () => {
                const loggedOut = await logout();
                if (loggedOut) props.navigation.navigate(strings.LOGIN);
              }}
            />
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen name={strings.PRODUCTSLIST} component={ProductsList} />
      <Drawer.Screen name={strings.SEARCHSCREEN} component={SearchScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
