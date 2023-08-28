import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';

import {Icon} from '~/components/core';
import {useAuth} from '~/contexts/auth';

const ProfileScreen = () => {
  const {user, signOut} = useAuth();

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center">
        <Image
          source={{
            uri: user?.avatarUrl
              ? user.avatarUrl
              : 'https://source.unsplash.com/random',
          }}
          className="h-24 w-24 rounded-full"
          resizeMode="cover"
        />
        <View className="items-center">
          <Text className="text-2xl font-bold text-slate-800">
            {user?.name}
          </Text>
          <Text className="text-sm text-slate-700">{user?.email}</Text>
        </View>
      </View>
      <View className="flex-1" />
      <View className="justify-center gap-4 bg-white pb-5">
        <TouchableOpacity
          activeOpacity={0.8}
          className="flex-row items-center gap-2 px-4">
          <Icon name="settings-outline" size={20} className="text-slate-900" />
          <Text className="text-sm text-slate-900">Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          className="flex-row items-center gap-2 px-4">
          <Icon name="help-buoy-outline" size={20} className="text-slate-900" />
          <Text className="text-sm text-slate-900">Help</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => signOut()}
          className="flex-row items-center gap-2 px-4">
          <Icon
            size={20}
            name="logout"
            type="MaterialIcons"
            className="text-slate-900"
          />
          <Text className="text-sm text-slate-900">Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
