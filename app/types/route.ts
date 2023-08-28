import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Auth?: NavigatorScreenParams<AuthStackParamList>;
  App?: NavigatorScreenParams<AppStackParamList>;
  NotFound: undefined;
};

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ResetPassword: undefined;
};

export type AppStackParamList = {
  Index?: NavigatorScreenParams<TabParamList>;
};

export type TabParamList = {
  Home: undefined;
  Category: undefined;
  Cart: undefined;
  Feed: undefined;
  Profile: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<AuthStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type AuthNavigationType<T extends keyof AuthStackParamList> =
  AuthStackScreenProps<T>['navigation'];

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

export type AppNavigationType<T extends keyof AppStackParamList> =
  AppStackScreenProps<T>['navigation'];

// export type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
//   BottomTabScreenProps<TabParamList, T>,
//   RootStackScreenProps<keyof RootStackParamList>
// >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
