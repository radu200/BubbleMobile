
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import BookingListScreen from '../containers/Bookings';
import { BookingsParamsList } from '../types';


const Bookings = createStackNavigator<BookingsParamsList>();

export default function BookingsNavigator() {
  return (
    <Bookings.Navigator>
      <Bookings.Screen
        name="BookingListScreen"
        component={BookingListScreen}
        options={{ headerTitle: 'Bookings', headerTitleAlign: "center", }}
      />
    </Bookings.Navigator>
  );
}

