import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import {strings} from '../config';
import DashBoard from '../screens/DashBoard';
import ProductsList from '../screens/ProductsList';
import SearchScreen from '../screens/SearchScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function TabNavigator(props: any) {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={strings.PRODUCTSLIST}
        component={ProductsList}
        options={{
          tabBarIcon: ({size, color}) => {
            return (
              <MaterialCommunityIcons
                name="format-list-bulleted"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={strings.DASHBOARD}
        component={DashBoard}
        options={{
          tabBarIcon: ({size, color}) => {
            return (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name={strings.SEARCHSCREEN}
        component={SearchScreen}
        options={{
          tabBarIcon: ({size, color}) => {
            return (
              <MaterialCommunityIcons
                name="magnify"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default TabNavigator;
