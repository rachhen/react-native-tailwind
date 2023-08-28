import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {displayName} from '../../../app.json';

export const Header = () => {
  return (
    <SafeAreaView edges={['top']} className="items-center bg-white p-4">
      <Text className="text-xl font-bold uppercase">{displayName}</Text>
    </SafeAreaView>
  );
};
