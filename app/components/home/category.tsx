import {View, Text, ImageBackground, ScrollView} from 'react-native';
import React from 'react';

const DATA = [
  {
    id: 1,
    name: 'Second Hand',
    imageUrl: 'https://www.freeiconspng.com/uploads/apple-icon-4.png',
    color: '#005E7B',
  },
  {
    id: 2,
    name: 'Apple',
    imageUrl: 'https://www.freeiconspng.com/uploads/apple-icon-4.png',
    color: '#FF5757',
  },
  {
    id: 3,
    name: 'Apple',
    imageUrl: 'https://www.freeiconspng.com/uploads/apple-icon-4.png',
    color: '#00BCD4',
  },
];

export const Category = () => {
  return (
    <View className="bg-white pb-4">
      <View className="px-4">
        <Text className="text-xl font-semibold">Category</Text>
        <Text className="text-gray-500 text-xs">
          Save your money with promotions
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {DATA.map(item => (
          <ImageBackground
            key={item.id}
            resizeMode="contain"
            source={{uri: item.imageUrl}}
            className={`h-[70px] w-[150px] items-center justify-center rounded-md bg-red-100 mt-3 ml-4`}>
            <Text className="text-white">{item.name}</Text>
          </ImageBackground>
        ))}
      </ScrollView>
    </View>
  );
};
