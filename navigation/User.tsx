
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import ProfileScreen from '../containers/Profile';
import { UserParamsList } from '../types';


const User = createStackNavigator<UserParamsList>();

export default function BookingsNavigator() {
  return (
    <User.Navigator>
      <User.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerTitle: 'Profile', headerTitleAlign: "center", }}
      />
    </User.Navigator>
  );
}

