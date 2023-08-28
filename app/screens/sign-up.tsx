import React from 'react';
import {useForm} from 'react-hook-form';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FormInput} from '~/components/form';
import {AuthStackScreenProps} from '~/types/route';

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpScreen = ({navigation}: AuthStackScreenProps<'SignUp'>) => {
  const {control, watch, handleSubmit} = useForm<FormValues>();

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
          <Text className="px-4 text-3xl font-bold">Create an account</Text>
          <View className="mx-4 pt-8">
            <FormInput
              control={control}
              name="name"
              label="Name"
              placeholder="John Deo"
              rules={{required: 'Name is required'}}
            />
            <FormInput
              control={control}
              name="email"
              label="Email"
              placeholder="user@example.com"
              rules={{required: 'Email is required'}}
            />
            <FormInput
              control={control}
              name="password"
              label="Password"
              placeholder="*******"
              inputProps={{secureTextEntry: true}}
              rules={{required: 'Password is required'}}
            />
            <FormInput
              control={control}
              name="confirmPassword"
              label="Confirm Password"
              placeholder="*******"
              inputProps={{secureTextEntry: true}}
              rules={{
                required: 'Confirm Password is required',
                validate: value => {
                  if (watch('password') != value) {
                    return 'Password not match';
                  }
                },
              }}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleSubmit(onSubmit)}
              className="items-center rounded-md bg-primary-600 py-2.5">
              <Text className="text-base font-medium text-white">Sign Up</Text>
            </TouchableOpacity>
            <View className="flex-row items-center gap-2 pt-4">
              <Text className="text-sm text-gray-700">
                Already have an account?
              </Text>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.goBack()}>
                <Text className="text-sm text-primary-600">Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
