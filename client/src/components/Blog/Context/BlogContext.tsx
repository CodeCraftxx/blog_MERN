import { createContext, useState, ReactNode, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Blog = {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt?: string;
};
type Blog2 = {
  title: string;
  content: string;
  author: string;
  createdAt?: string;
};

type BlogContextType = {
  blogs: Blog[];
  fetchBlogs: () => void;
  postBlog: (data: Blog2) => void;
  isLoading: boolean;
  readBlog: Blog[];
  readMore: (id: string) => void
};

export const BlogContext = createContext<BlogContextType>({
  blogs: [],
  fetchBlogs: () => {},
  postBlog: () => {},
  isLoading: false,
  readBlog: [],
  readMore: () => {}
});

type BlogProviderProps = {
  children: ReactNode;
};

const BlogProvider = ({ children }: BlogProviderProps) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [readBlog, setReadBlog] = useState<Blog[]>([]);
  const navigate = useNavigate();
  const url = "http://localhost:3000/api/blogs"


  // Fetch blogs from the server
  const fetchBlogs = () => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setIsLoading(false);
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      })
      .finally(() => setIsLoading(false));
  };

  // Post a new blog to the server
  const postBlog = (data: Blog2) => {
    axios
      .post(`${url}/publish`, data)
      .then((response) => {
        setBlogs((prevBlogs) => [...prevBlogs, response.data]);
        console.log("Blog created successfully");
        navigate("/");
        fetchBlogs();
      })
      .catch((error) => {
        console.error("Error creating blog:", error);
      });
  };
  const readMore = (id: string) =>{
    axios.get(`${url}/${id}`)
    .then(res => {
      setReadBlog(res.data);
      navigate('/blog');
    })
    .catch(err => console.error(err.message))
  }
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, fetchBlogs, postBlog, isLoading, readBlog, readMore}}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
