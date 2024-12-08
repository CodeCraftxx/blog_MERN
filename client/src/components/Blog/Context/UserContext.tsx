import { createContext, ReactNode, useState } from "react";

type User = {
  first: string;
  last: string;
  email: string;
};
type UserContextType = {
  user: User
  setUser: (data: User) => void;
}
const obj = {first: "", last: "", email: ""}
export const UserContext = createContext<UserContextType>({
  user: obj,
  setUser: () => {}
})

type UserProviderProps = {
  children: ReactNode;
};
const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>(obj);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;