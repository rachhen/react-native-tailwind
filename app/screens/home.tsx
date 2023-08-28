import React from 'react';
import {ScrollView, View} from 'react-native';

import {Banner, Category, Header} from '~/components/home';

const HomeScreen = () => {
  return (
    <View className="flex-1">
      <Header />
      <ScrollView>
        <Category />
        <View className="w-full h-0.5 bg-gray-200" />
        <Banner />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
