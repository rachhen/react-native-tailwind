import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppStackParamList} from '~/types/route';
import TabRoutes from './tabs';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Index" component={TabRoutes} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
