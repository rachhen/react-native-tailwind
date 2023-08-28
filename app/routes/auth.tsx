import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from '~/screens/sign-in';
import SignUpScreen from '~/screens/sign-up';
import {AuthStackParamList} from '~/types/route';
import ResetPasswordScreen from '~/screens/reset-password';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
