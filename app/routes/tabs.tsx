import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Icon} from '~/components/core';
import {TabParamList} from '~/types/route';
import colors from '~/theme/colors';
import HomeScreen from '~/screens/home';
import ProfileScreen from '~/screens/profile';
import CategoryScreen from '~/screens/category';
import FeedScreen from '~/screens/feed';
import CartScreen from '~/screens/cart';

const Tab = createBottomTabNavigator<TabParamList>();

const TabRoutes = () => {
  const {bottom} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 5,
          height: bottom + 55,
        },
        tabBarLabelStyle: {
          marginBottom: 8,
        },
        tabBarActiveTintColor: colors.primary[500],
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon({color}) {
            return <Icon name="home-outline" color={color} size={20} />;
          },
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          tabBarIcon({color}) {
            return <Icon name="grid-outline" color={color} size={20} />;
          },
        }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon({color}) {
            return (
              <Icon
                name="rss-feed"
                type="MaterialIcons"
                color={color}
                size={23}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon({color}) {
            return <Icon name="cart-outline" color={color} size={23} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon({color}) {
            return <Icon name="person-outline" color={color} size={23} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
