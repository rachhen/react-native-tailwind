import React from 'react';
import {useForm} from 'react-hook-form';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {FormInput} from '~/components/form';
import {useAuth} from '~/contexts/auth';
import {AuthStackScreenProps} from '~/types/route';

type FormValues = {
  email: string;
  password: string;
};

const SignInScreen = ({navigation}: AuthStackScreenProps<'SignIn'>) => {
  const {signIn} = useAuth();
  const {control, handleSubmit} = useForm<FormValues>();

  const onSubmit = (values: FormValues) => {
    signIn({email: values.email, name: 'Dev'});
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View className="flex-1 justify-center">
          <Text className="px-4 text-3xl font-bold">Welcome back</Text>
          <View className="px-4 pt-8">
            <FormInput
              name="email"
              label="Email"
              control={control}
              rules={{required: 'Email is required'}}
              inputProps={{autoCapitalize: 'none'}}
            />
            <FormInput
              control={control}
              name="password"
              label="Password"
              inputProps={{secureTextEntry: true}}
              rules={{required: 'Password is required'}}
            />
            <View className="mb-4 flex flex-row items-center justify-between">
              <RememberMe />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('ResetPassword')}>
                <Text className="text-primary-500 text-sm">Reset password</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleSubmit(onSubmit)}
              className="bg-primary-600 items-center rounded-md py-2.5">
              <Text className="text-base font-medium text-white">Login</Text>
            </TouchableOpacity>
            <View className="flex-row items-center gap-2 pt-4">
              <Text className="text-sm text-gray-700">
                Don't have an account?
              </Text>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('SignUp')}>
                <Text className="text-primary-600 text-sm">Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const RememberMe = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Pressable
      onPress={() => setChecked(!checked)}
      className="flex-row items-center">
      <View className="bg-primary-600 mr-2 h-6 w-6 items-center justify-center rounded-md">
        {checked && <View className="h-3 w-3 rounded-sm bg-white" />}
      </View>
      <Text className="text-gray-700">Remember me</Text>
    </Pressable>
  );
};

export default SignInScreen;
