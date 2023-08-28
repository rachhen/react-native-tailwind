import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useForm} from 'react-hook-form';

import {FormInput} from '~/components/form';
import {AuthStackScreenProps} from '~/types/route';

type FormValues = {
  email: string;
};

const ResetPasswordScreen = ({
  navigation,
}: AuthStackScreenProps<'ResetPassword'>) => {
  const {control, handleSubmit} = useForm<FormValues>();

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <View className="flex-1 justify-center bg-slate-50">
      <View className="mx-4">
        <Text className="mb-2 text-3xl font-bold text-slate-900">
          Reset Your Password
        </Text>
        <Text className="mb-8 text-sm text-slate-900">
          Forgotten your account password? Enter your email address below and
          you'll receive a link to create a new one.
        </Text>
        <FormInput
          control={control}
          name="email"
          label="Email"
          placeholder="user@example.com"
          rules={{required: 'Email is required'}}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleSubmit(onSubmit)}
          className="items-center rounded-md bg-primary-600 py-2.5">
          <Text className="text-base font-medium text-white">Reset</Text>
        </TouchableOpacity>
        <View className="flex-row items-center gap-2 pt-4">
          <Text className="text-sm text-gray-700">Back to</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}>
            <Text className="text-sm text-primary-600">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ResetPasswordScreen;
