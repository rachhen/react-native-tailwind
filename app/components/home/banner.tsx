import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Image,
  useWindowDimensions,
  LayoutAnimation,
} from 'react-native';

const DATA = [
  'https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/05/11/11/15/workplace-2303851_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538_1280.jpg',
];

export const Banner = () => {
  const {width} = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);

  const PAGE_WIDTH = width - 32;

  return (
    <View className="bg-white px-4 pb-2 pt-4">
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={({nativeEvent}) => {
          const index = Math.round(nativeEvent.contentOffset.x / PAGE_WIDTH);
          if (index !== currentIndex) {
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut,
            );
            setCurrentIndex(index);
          }
        }}>
        {DATA.map(uri => (
          <Image
            key={uri}
            source={{uri}}
            className="rounded-md"
            style={{width: PAGE_WIDTH, height: 200}}
          />
        ))}
      </ScrollView>
      <View className="flex-row items-center justify-center gap-2 pt-2">
        {DATA.map((item, index) => (
          <View
            key={item}
            className={`h-1.5 rounded-md bg-gray-200 ${
              currentIndex === index ? 'w-3' : 'w-1.5'
            }`}
          />
        ))}
      </View>
    </View>
  );
};
