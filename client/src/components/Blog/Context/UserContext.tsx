import axios from "axios";
import { createContext, ReactNode, useState } from "react";

type Blog = {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt?: string;
};
type User = {
  first: string;
  last: string;
  email: string;
};
type UserContextType = {
  userBlogs: Blog[]
  user: User
  setUser: (data: User) => void;
  handleUserBlogs: (email: string) => void;
  isLoading: boolean;

}
const obj = {first: "", last: "", email: ""}
export const UserContext = createContext<UserContextType>({
  userBlogs: [],
  user: obj,
  setUser: () => {},
  handleUserBlogs: () => {},
  isLoading: false,

})

type UserProviderProps = {
  children: ReactNode;
};
const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>(obj);
  const [userBlogs, setUserBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const url = "http://localhost:3000/api/blogs/"

  const handleUserBlogs = (email: string) => {
    setIsLoading(true);
    axios
      .get(`${url}/my-blogs/${email}`)
      .then((response) => {
        setIsLoading(false);
        setUserBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <UserContext.Provider value={{ user, setUser, userBlogs, handleUserBlogs, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;