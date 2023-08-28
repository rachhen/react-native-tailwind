import React from 'react';
import {IconProps as BaseIconProps} from 'react-native-vector-icons/Icon';

export type IconType =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'Fontisto'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialIcons'
  | 'MaterialCommunityIcons'
  | 'Octicons'
  | 'Zocial'
  | 'SimpleLineIcons';

export interface IconProps extends BaseIconProps {
  type?: IconType;
}

export const Icon = ({type, ...props}: IconProps) => {
  switch (type) {
    case 'AntDesign':
      const AntDesign = require('react-native-vector-icons/AntDesign').default;
      return <AntDesign {...props} />;

    case 'Entypo':
      const Entypo = require('react-native-vector-icons/Entypo').default;
      return <Entypo {...props} />;

    case 'Fontisto':
      const Fontisto = require('react-native-vector-icons/Fontisto').default;
      return <Fontisto {...props} />;

    case 'SimpleLineIcons':
      const SimpleLineIcons =
        require('react-native-vector-icons/SimpleLineIcons').default;
      return <SimpleLineIcons {...props} />;

    case 'EvilIcons':
      const EvilIcons = require('react-native-vector-icons/EvilIcons').default;
      return <EvilIcons {...props} />;

    case 'MaterialIcons':
      const MaterialIcons =
        require('react-native-vector-icons/MaterialIcons').default;
      return <MaterialIcons {...props} />;

    case 'FontAwesome':
      const FontAwesome =
        require('react-native-vector-icons/FontAwesome').default;
      return <FontAwesome {...props} />;

    case 'FontAwesome5':
      const FontAwesome5 =
        require('react-native-vector-icons/FontAwesome5').default;
      return <FontAwesome5 {...props} />;

    case 'Foundation':
      const Foundation =
        require('react-native-vector-icons/Foundation').default;
      return <Foundation {...props} />;

    case 'MaterialCommunityIcons':
      const MaterialCommunityIcons =
        require('react-native-vector-icons/MaterialCommunityIcons').default;
      return <MaterialCommunityIcons {...props} />;

    case 'Zocial':
      const Zocial = require('react-native-vector-icons/Zocial').default;
      return <Zocial {...props} />;

    case 'Octicons':
      const Octicons = require('react-native-vector-icons/Octicons').default;
      return <Octicons {...props} />;

    case 'Feather':
      const Feather = require('react-native-vector-icons/Feather').default;
      return <Feather {...props} />;

    default:
      const Ionicons = require('react-native-vector-icons/Ionicons').default;
      return <Ionicons {...props} />;
  }

  // Can't use like this, it got error
  // const AsIcon = require('react-native-vector-icons/' + type).default;

  // return <NBIcon as={getIcon()} {...props} />;
};
