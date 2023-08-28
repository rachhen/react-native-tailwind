import React, {PropsWithChildren} from 'react';

interface IUser {
  name: string;
  email: string;
  avatarUrl?: string;
}

interface IAuthContext {
  signIn: (user: IUser) => void;
  signOut: () => void;
  user: IUser | null;
}

const AuthContext = React.createContext<IAuthContext>({
  signIn: () => {},
  signOut: () => {},
  user: null,
});

const AuthProvider = (props: PropsWithChildren) => {
  const [user, setUser] = React.useState<IUser | null>(null);

  function signIn(newUser: IUser) {
    setUser(newUser);
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{user, signIn, signOut}}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export default AuthProvider;
